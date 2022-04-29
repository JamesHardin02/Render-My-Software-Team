// returns a key of an obj by finding the value of that key in the obj
function getKeyByValue(object, variable) {
  return Object.keys(object).find(key => object[key] === variable);
}

// capitalizes first letter then edits to string process by specific string 
// or if string is one word returns the string
function editKeyName(string) {
  let newString = string.charAt(0).toUpperCase() + string.slice(1);
  if (newString === "OfficeNumber"){ // adds space between 'Office' and 'Number' and lowercases 'number'
    return newString.substring(0, 6) + " " + newString.charAt(6).toLowerCase() + newString.slice(7);
  } else if(newString ==="Github") {// capitalized 'h' in 'Github'
    return newString.substring(0,3) + newString.charAt(3).toUpperCase() + newString.slice(4);
  } else{ // returns just a first letter capitalized string
    return newString;
  }
}

// will return GitHub profile link for engineers, School info for interns, and office number for the manager
function roleSpecificLi(object, variable){
  const key = editKeyName(getKeyByValue(object, variable));
  if (key === "GitHub"){
    return`<li class="list-group-item p-3">${key}: <a href="https://github.com/${variable}" target="_blank">${variable}<a/></li>`
  }
  return`<li class="list-group-item p-3">${key}: ${variable}</li>`
}

// determines which fontawesome symbol to use by role
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

// Returns template that has been interpolated with a team member's data
/* deconstructing variables have to be exact name of key from obj,
*  so variable is declared to store last item allowing dynamic deconstructing*/
function returnCardPartial(object){
  const { name, id, email, role, ...lastItemObj } = object
  const variable = Object.values(lastItemObj)[0];
  return`
  <div class="card shadow" style="width: 18rem;">
    <div class="card-body bg-primary border rounded-top">
      <h3 class="card-title text-white">${name}</h3>
      <h4 class="card-subtitle text-white mb-2">
      ${roleIcon(role)}${role}</h4>
    </div>
    <div class="card-body bg-light border rounded-bottom"> 
      <div class="container mt-4 mb-4"> 
        <ul class="list-group list-group-flush shadow-sm">
          <li class="list-group-item p-3">Employee ID: ${id}</li>
          ${roleSpecificLi(object, variable)}
          <li class="list-group-item p-3">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
        </ul>
      </div>
    </div>
  </div>
  `
}

/* If returns maped engineers arr. and interns arr. 
*  each obj in arr being sent to card template */
// Else sends Manager obj to card template
function generateCard(data){
  if (Array.isArray(data)){
    return`${data.map((object) => {return`${returnCardPartial(object)}`}).join('')}`;
  }else {
    return`${returnCardPartial(data)}`
  }
}

// page content template. Interpolates dynamically generated profile cards for each team member.
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