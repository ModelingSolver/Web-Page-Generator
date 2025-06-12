function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// 🔒 Protection contre XSS pour attributs (URL, src, href)
function escapeAttr(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ✅ Validation des URLs
function isValidURL(str) {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (e) {
    return false;
  }
}

document.getElementById("generate-btn").onclick = function() {
  let title = escapeHTML(prompt("Titre de la page ?") || "");
  let heroText = escapeHTML(prompt("Texte de la section hero ?") || "");

  let heroImageInput = prompt("URL de l'image de fond de la section hero ?");
  let heroImage = isValidURL(heroImageInput) ? escapeAttr(heroImageInput) : "";

  let serviceTitle = escapeHTML(prompt("Titre de la section services ?") || "");
  let serviceText1 = escapeHTML(prompt("Texte du service 1 ?") || "");

  let serviceImage1Input = prompt("URL de l'image du service 1 ?");
  let serviceImage1 = isValidURL(serviceImage1Input) ? escapeAttr(serviceImage1Input) : "";

  let serviceText2 = escapeHTML(prompt("Texte du service 2 ?") || "");

  let serviceImage2Input = prompt("URL de l'image du service 2 ?");
  let serviceImage2 = isValidURL(serviceImage2Input) ? escapeAttr(serviceImage2Input) : "";

  let serviceText3 = escapeHTML(prompt("Texte du service 3 ?") || "");

  let serviceImage3Input = prompt("URL de l'image du service 3 ?");
  let serviceImage3 = isValidURL(serviceImage3Input) ? escapeAttr(serviceImage3Input) : "";

  let contactText = escapeHTML(prompt("Texte de la section contact ?") || "");

  let iconInput = prompt("URL de l'icône de la page ?");
  let icon = isValidURL(iconInput) ? escapeAttr(iconInput) : "";

  let keywords = escapeHTML(prompt("Mots clefs ?") || "");

  let htmlCode = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="keywords" content="${keywords}">
  <link rel="icon" href="${icon}">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="hero">
      <h1>${title}</h1>
      <p>${heroText}</p>
      <img src="${heroImage}" alt="Image de fond">
    </section>
    <section class="services">
      <h2>${serviceTitle}</h2>
      <div class="colonne">
        <img src="${serviceImage1}" alt="Service 1">
        <h3>Service 1</h3>
        <p>${serviceText1}</p>
      </div>
      <div class="colonne">
        <img src="${serviceImage2}" alt="Service 2">
        <h3>Service 2</h3>
        <p>${serviceText2}</p>
      </div>
      <div class="colonne">
        <img src="${serviceImage3}" alt="Service 3">
        <h3>Service 3</h3>
        <p>${serviceText3}</p>
      </div>
    </section>
    <section class="contact">
      <h2>Contact</h2>
      <p>${contactText}</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 Mon site web</p>
  </footer>
</body>
</html>`;

  let cssCode = `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
}
header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
header nav ul li {
  margin-right: 20px;
}
header nav a {
  color: #fff;
  text-decoration: none;
}
.hero {
  background-image: url('${heroImage}');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.colonne {
  width: 30%;
  margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.colonne img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}
.contact {
  padding: 20px;
}
footer {
  background-color: #333;
  color: #fff;
  padding: 1em;
  text-align: center;
  clear: both;
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
};
