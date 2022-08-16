// TODO: Include packages needed for this application
const genMarkDown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//title, description, installation, usage, license, contributing, tests, Questions
// const questions = [];
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your application?",
        name: "title",
      },
      {
        type: "input",
        message: "Describe your application",
        name: "description",
      },
      {
        type: "input",
        message: "How do you install this application",
        name: "installation",
      },
      {
        type: "input",
        message: "How do you use this application?",
        name: "usage",
      },
      {
        type: "input",
        message:
          "Please enter the GitHub profile of anyone who you wish to give credit to on this project.",
        name: "credits",
      },
      {
        type: "list",
        message: "Which license are you using?",
        name: "license",
        default: "MIT",
        choices: ["MIT", "Apache", "ISC"],
      },
      {
        type: "input",
        message:
          "Enter details on the best way to contribute to this open-source project.",
        name: "contributions",
      },
      {
        type: "input",
        message:
          "If you have built any tests for your application you can include a URL here.",
        name: "tests",
      },
      {
        type: "input",
        message: "Enter your email address",
        name: "questions",
      },
    ])
    .then((response) => {
      const readMeText = genMarkDown(response);
      writeToFile("dist/README.md", readMeText);
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// // TODO: Create a function to initialize app
function init() {
  promptUser();
}

// // Function call to initialize app
init();
