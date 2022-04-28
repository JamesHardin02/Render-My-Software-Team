function getKeyByValue(object, variable) {
  return Object.keys(object).find(key => object[key] === variable);
}

function capitalizeFirstLetter(string) {
  let newString = string.charAt(0).toUpperCase() + string.slice(1);
  if (newString === "OfficeNumber"){
    return newString.substring(0, 6) + " " + newString.charAt(6).toLowerCase() + newString.slice(7);
  }else{
    return newString;
  }

}

function roleSpecificLi(object, variable){
  return`<li class="list-group-item p-3 ">${capitalizeFirstLetter(getKeyByValue(object, variable))}: ${variable}</li>`
}

function roleIcon(role){
  let icon;
  switch(role){
    case "Manager":
      icon = 'fa-mug-hot'
      break;
    case "Engineer":
      icon = 'fa-glasses'
      break;
    case "Intern":
      icon = 'fa-user-graduate'
      break;
  }

  return`<i class="fa-solid ${icon} p-1"></i>`
}

function returnCardPartial(object){
  const { name, id, email, role, ...lastItemObj } = object
  const variable = Object.values(lastItemObj)[0];
  return`
  <div class="card shadow border rounded-3" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h3 class="card-title text-white">${name}</h3>
      <h4 class="card-subtitle text-white mb-2">
      ${roleIcon(role)}${role}</h4>
    </div>
    <div class="card-body bg-light"> 
      <div class="container mt-4 mb-4"> 
        <ul class="list-group list-group-flush shadow">
          <li class="list-group-item p-3">Employee ID: ${id}</li>
          ${roleSpecificLi(object, variable)}
          <li class="list-group-item p-3"><a href="mailto:${email}" class="card-link">Email: ${email}</a></li>
        </ul>
      </div>
    </div>
  </div>
  `
}

function generateCard(data){
  if (Array.isArray(data)){
    return`${data.map((object) => {return`${returnCardPartial(object)}`}).join('')}`;
  }else {
    return`${returnCardPartial(data)}`
  }
}

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
    <div class="mt-5 mb-5 container d-flex flex-wrap justify-content-center gap-4">
      ${generateCard(manager)}
      ${generateCard(engineers)}
      ${generateCard(interns)}
    </div>
  </body>

  <footer class="mt-auto">
    <h5 class="text-dark">&copy; ${new Date().getFullYear()} Render My Software Team - Made with <i class="fa-solid fa-heart"></i> by James Hardin </h5>
  </footer>
  </html>
  `;
}