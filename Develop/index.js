// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? (If needed)",
    },
    {
        type: "input",
        name: "usage",
        message: "What usage does this provide to the user?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license that best applys to the project.",
        choices: ["MIT","Apache2.0","(GPL)v3","MPL2.0","BSD3","None"],
    },
    {
        type: "input",
        name: "contribution",
        input: "List any (GitHub) contributors that helped with the project.",
        default: '',
    },
    {
        type: "input",
        name: "test",
        input: "Provide required tests if applicable.",
    },
    {
        type: "input",
        name: "question",
        input: "What is your email for questions about your project?",

    },

];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializes app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md file . . .");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
