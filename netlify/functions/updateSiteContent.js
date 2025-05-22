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

    if (!g
