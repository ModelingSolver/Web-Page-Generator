document.getElementById("generate-btn").addEventListener("click", function() {
  let title = prompt("Titre de la page ?");
  let text = prompt("Texte de la page ?");
  let image = prompt("URL de l'image ?");
  let link = prompt("Lien ?");
  let keywords = prompt("Mots clefs ?");
  let icon = prompt("URL de l'icône de la page ?");
  let htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <meta name="keywords" content="${keywords}">
    <link rel="icon" href="${icon}">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>${title}</h1>
    <p>${text}</p>
    <img src="${image}" alt="Image">
    <p><a href="${link}">Lien</a></p>
  </body>
</html>`;
  let cssCode = `body {
  font-family: Arial, sans-serif;
  margin: 20px;
}
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}
img {
  width: 50%;
  height: auto;
  margin: 20px 0;
  border: 1px solid #ccc;
}
a {
  text-decoration: none;
  color: #337ab7;
}
a:hover {
  color: #23527c;
}`;
  let newWindow = window.open();
  newWindow.document.write(`
    <html>
      <head>
        <title>Code HTML et CSS</title>
        <style>
          textarea {
            width: 100%;
            height: 300px;
            font-family: monospace;
          }
        </style>
      </head>
      <body>
        <h1>Code HTML</h1>
        <textarea>${htmlCode}</textarea>
        <h1>Code CSS</h1>
        <textarea>${cssCode}</textarea>
      </body>
    </html>
  `);
});
