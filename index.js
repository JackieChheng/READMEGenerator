// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');    

// TODO: Create an array of questions for user input
const questions = [
    {
        input: "input",
        name: "name",
        message: "What is your full name?",
    },
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
        message: "List any (GitHub) contributors that helped with the project.",
        default: '',
    },
    {
        type: "input",
        name: "test",
        message: "Provide required tests if applicable.",
    },
    {
        type: "input",
        name: "creator",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "question",
        message: "What is your email for questions about your project?",

    },

];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializes app
async function init() {
    try {
        const responses = await inquirer.prompt(questions);
        console.log("Creating Professional README.md file . . .");
        await writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
        console.log("README.md successfully generated!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}


// Function call to initialize app
init();
