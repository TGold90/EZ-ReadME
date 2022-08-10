// TODO: Include packages needed for this application
const genMarkDown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//title, description, table of contents, installation, usage, license, contributing, tests, Questions
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your application?",
      name: "title",
    },
  ])
  .then((response) => {
    const readMeText = genMarkDown(response);
    writeToFile("dist/README.md", readMeText);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
