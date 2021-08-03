// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'stack',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'contact',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
   .prompt(questions);
    console.log("create the readme");
}

// Function call to initialize app
init();
