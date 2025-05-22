const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const OWNER = 'abutahir47';
  const REPO = 'voicesoftruth';
  const FILE_PATH = 'siteContent.json';
  const BRANCH = 'main';

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const body = JSON.parse(event.body);
    const contentString = JSON.stringify(body.content, null, 2);
    const base64Content = Buffer.from(contentString).toString('base64');

    // Get the current file SHA
    const getRes = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
      }
    );

    if (!getRes.ok) {
      return {
        statusCode: getRes.status,
        body: `Failed to get file SHA: ${await getRes.text()}`,
      };
    }

    const getData = await getRes.json();
    const sha = getData.sha;

    // Update the file
    const putRes = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
        },
        body: JSON.stringify({
          message: 'Update siteContent.json via Netlify function',
          content: base64Content,
          sha: sha,
          branch: BRANCH,
        }),
      }
    );

    if (!putRes.ok) {
      const errorData = await putRes.json();
      return {
        statusCode: putRes.status,
        body: JSON.stringify(errorData),
      };
    }

    return {
      statusCode: 200,
      body: 'File updated successfully',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server error: ' + error.message,
    };
  }
};
