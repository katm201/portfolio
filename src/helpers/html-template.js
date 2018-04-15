export default function (content) {
  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Katherine Manning</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" rel="stylesheet">
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}
