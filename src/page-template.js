function generateManagerCard({ name, id, email, role, officeNumber }){
  return`
    <div class="card shadow border rounded-3" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h3 class="card-title text-white">${name}</h3>
        <h4 class="card-subtitle text-white mb-2">
        <i class="fa-solid fa-mug-hot p-1"></i>${role}</h4>
      </div>
      <div class="card-body bg-light"> 
        <div class="container mt-4 mb-4"> 
          <ul class="list-group list-group-flush shadow">
            <li class="list-group-item p-3">Employee ID: ${id}</li>
            <li class="list-group-item p-3 ">Office number: ${officeNumber}</li>
            <li class="list-group-item p-3"><a href="mailto:${email}" class="card-link">Email: ${email}</a></li>
          </ul>
        </div>
      </div>
    </div>
    `
}

function generateEngineerCards(engineersArr){
  return`${engineersArr.map(({ name, id, email, role, github }) => {
    return`
    <div class="card shadow border rounded-3" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h3 class="card-title text-white">${name}</h3>
        <h4 class="card-subtitle text-white mb-2">
        <i class="fa-solid fa-glasses p-1"></i></i>${role}</h4>
      </div>
      <div class="card-body bg-light"> 
        <div class="container mt-4 mb-4"> 
          <ul class="list-group list-group-flush shadow">
            <li class="list-group-item p-3">Employee ID: ${id}</li>
            <li class="list-group-item p-3"><a href="https://github.com/${github}" class="card-link" target="_blank" >GitHub: ${github}</a></li>
            <li class="list-group-item p-3"><a href="mailto:${email}" class="card-link">Email: ${email}</a></li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }).join('')}`;
};

function generateInternCards(internArr){
  return`${internArr.map(({ name, id, email, role, school }) => {
    return`
    <div class="card shadow border rounded-3" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h3 class="card-title text-white">${name}</h3>
        <h4 class="card-subtitle text-white mb-2">
        <i class="fa-solid fa-user-graduate p-1"></i>${role}</h4>
      </div>
      <div class="card-body bg-light"> 
        <div class="container mt-4 mb-4"> 
          <ul class="list-group list-group-flush shadow">
            <li class="list-group-item p-3">Employee ID: ${id}</li>
            <li class="list-group-item p-3">School: ${school}</li>
            <li class="list-group-item p-3"><a href="mailto:${email}" class="card-link">Email: ${email}</a></li>
          </ul>
        </div>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Render My Software Team</title>
  </head>

  <body class="d-flex flex-column min-vh-100">
    <header class="bg-danger p-5">
      <h1 class="text-center text-white">My Software Team</h1>
    </header>
    <div class="mt-5 container d-flex flex-wrap justify-content-center gap-4">
      ${generateManagerCard(manager)}
      ${generateEngineerCards(engineers)}
      ${generateInternCards(interns)}
    </div>
  </body>

  <footer class="mt-auto">
    <h5 class="text-dark">&copy; ${new Date().getFullYear()} Render My Software Team - Made with <i class="fa-solid fa-heart"></i> by James Hardin </h5>
  </footer>
  </html>
  `;
}