const genMarkDown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of this application?",
        name: "title",
      },
      {
        type: "input",
        message: "Describe what this application does.",
        name: "description",
      },
      {
        type: "input",
        message: "What are the steps to install this application?",
        name: "installation",
      },
      {
        type: "input",
        message: "How is this application used?",
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
        choices: ["MIT", "Apache", "ISC", "GPL", "Unlicense"],
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
          "If you have built any tests for your application you can paste a URL here.",
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
      writeToFile("dist/README.md", readMeText, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });
}

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function init() {
  promptUser();
}

init();
