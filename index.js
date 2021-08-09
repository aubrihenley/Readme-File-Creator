// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',

    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Provide a relative url for your screenshot.',
      name: 'screenshot',
    },
    {
      type: 'input',
      message: 'List your collaborators, if any, with links to their GitHub profiles.',
      name: 'collaborators',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license.',
      choices: ['Apache License 2.0',
                'GNU GPLv3',
                'GNU GPLv2',
                'ISC License',
                'MIT',
                'No License - All Rights Reserved',
      ]
    },
    {
      type: 'input',
      message: 'How would you like others to contribute to your project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Explain how to run your tests.',
      name: 'tests'
    },
    {
      type: 'input',
      message: 'Please provide your GitHub user name.',
      name: 'userName',
    },
    {
      type: 'input',
      message: 'Please provide your e-mail address.',
      name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
//this function determines the file type readme.md


// TODO: Create a function to initialize app
function init() {
  inquirer
   .prompt(questions).then((data) => {
       console.log(data);
  });
}
// Function call to initialize app
init();
