const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Questions{
  getManager(){
    inquirer
    .prompt([{
      type: 'text',
      name: 'name',
      message: "What is your team manager's name?"
    },
    {
      type: 'number',
      name: 'id',
      message: "What is your team manager's employee id?"
    },
    {
      type: 'text',
      name: 'email',
      message: "What is your team manager's email adress?"
    },
    {
      type: 'number',
      name: 'officeNumber',
      message: "What is your team manager's office number?"
    }
  ])
  .then((answerObj) =>{
    new Manager(answerObj);
    console.log(Manager);
  });
  };
};

module.exports = Questions;