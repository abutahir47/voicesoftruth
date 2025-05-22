Error updating file: <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page not found</title>
    <style>
      :root {
        --colorRgbFacetsTeal600: 2 128 125;
        --colorTealAction: var(--colorRgbFacetsTeal600);
        --colorRgbFacetsNeutralLight200: 233 235 237;
        --colorHr: var(--colorRgbFacetsNeutralLight200);
        --colorRgbFacetsNeutralLight700: 53 58 62;
        --colorGrayDarkest: var(--colorRgbFacetsNeutralLight700);
        --colorGrayLighter: var(--colorRgbFacetsNeutralLight200);
        --colorText: var(--colorGrayDarkest);
        --effectShadowLightShallow: 0 1px 10px 0 rgb(53 58 62 / 6%),
          0 2px 4px 0 rgb(53 58 62 / 8%);
        --colorRgbFacetsNeutralDark900: 6 11 16;
      }
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        background: white;
        overflow: hidden;
        margin: 0;
        padding: 0;
        line-height: 1.5;
        color: rgb(var(--colorText));
      }

      @media (prefers-color-scheme: dark) {
        body {
          background: rgb(var(--colorRgbFacetsNeutralDark900));
        }
      }

      h1 {
        margin: 0;
        font-size: 1.375rem;
        line-height: 1;
      }

      h1 + p {
        margin-top: 8px;
      }

      .main {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
      }

      .card {
        position: relative;
        width: 75%;
        max-width: 364px;
        padding: 24px;
        background: white;
        border-radius: 8px;
        box-shadow: var(--effectShadowLightShallow);
        border: 1px solid rgb(var(--colorGrayLighter));
      }

      a {
