function generateManagerCard({ name, id, email, role, officeNumber }){
  return`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
    <p class="card-text">Employee ID: ${id}
    office number: ${officeNumber}.</p>
    <a href="mailto:${email}" class="card-link">Email: ${email}</a>
  </div>
</div>`
}

function generateEngineerCards(engineersArr){
  return`${engineersArr.map(({ name, id, email, role, github }) => {
    return `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        <p class="card-text">Employee ID: ${id}
        <a href="mailto:${email}" class="card-link">Email: ${email}</a>
        <a href="https://github.com/${github}" class="card-link">GitHub: ${github}</a>
      </div>
    </div>`
  }).join('')}`;
};

function generateInternCards(internArr){
  return`${internArr.map(({ name, id, email, role, school }) => {
    return`
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        <p class="card-text">Employee ID: ${id}
        School: ${school}
        <a href="mailto:${email}" class="card-link">Email: ${email}</a>
      </div>
    </div>
    `;
  }).join('')}`;
};

module.exports = ({ engineers, interns, manager }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Render My Software Team</title>
  </head>

  <body>
  ${generateManagerCard(manager)}
  ${generateEngineerCards(engineers)}
  ${generateInternCards(interns)}
  </body>

  <footer class="">
    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by James Hardin - Render My Software Team developer </h3>
  </footer>
  </html>
  `;
}