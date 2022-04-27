const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Questions{
  constructor(){
    this.manager;
    this.engineers = [];
    this.interns = [];
  }

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
  .then(answerObj => {
      this.manager = new Manager(answerObj);
      this.promptNextMember();
    });
  };

  promptNextMember(){
    inquirer
    .prompt({
        type: 'list',
        message: 'Which kind of team member would you like to add?',
        name: 'action',
        choices: ['Engineer', 'Intern']
      }
    )
    .then(({ action }) =>{
      if (action === 'Engineer'){
        inquirer
        .prompt([
          {
            type: 'text',
            name: 'name',
            message: "What is your engineer's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is your engineer's employee id?"
          },
          {
            type: 'text',
            name: 'email',
            message: "What is your engineer's email adress?"
          },
          {
            type: 'text',
            name: 'github',
            message: "What is your engineer's GitHub username?"
          }
        ])
        .then(answerObj => {
          const engineer = new Engineer(answerObj);
          this.engineers.push(engineer);
          console.log(this.engineers);
          this.addAnotherMember();
        })
      } else {
        inquirer
        .prompt([
          {
            type: 'text',
            name: 'name',
            message: "What is your intern's name?"
          },
          {
            type: 'number',
            name: 'id',
            message: "What is your intern's employee id?"
          },
          {
            type: 'text',
            name: 'email',
            message: "What is your intern's email adress?"
          },
          {
            type: 'text',
            name: 'school',
            message: "What school is your intern enrolled at?"
          }
        ])
        .then(answerObj => {
          const intern = new Intern(answerObj);
          this.interns.push(intern);
          console.log(this.interns);
          this.addAnotherMember();
        });
      };
    });
  };

  addAnotherMember(){
    inquirer
    .prompt({
      type: 'list',
      message: 'Would you like to add another team member?',
      name: 'action',
      choices: ['Yes', 'No']
    })
    .then(({ action }) => {
      if(action === 'Yes'){
        this.promptNextMember();
      } else {
        // generate page end inquirer prompt loop
      }
    })
  };
};

module.exports = Questions;