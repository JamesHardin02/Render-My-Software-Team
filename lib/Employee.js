// Parent class of Engineer, Intern, and Manger. 
// Engineer, Intern, and Manger inherit Employee's attr and methods
class Employee{
  constructor(name = '', id = '', email = '', role = 'Employee'){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }

  getName(){
    return this.name;
  }

  getId(){
    return this.id;
  }

  getEmail(){
    return this.email;
  }

  getRole(){
    return this.role;
  }
}

module.exports = Employee;