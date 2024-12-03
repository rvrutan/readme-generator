// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

//internal modules
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Project Title",
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
    default: "Project Description",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are guidelines for contribution?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    name: "license",
    choices: [
      "Apache 2.0",
      "MIT",
      "Zlib",
      "WTFPL",
      "None",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log('Generating README...'); 
        const markdownContent = generateMarkdown(answers);

        fs.writeFile('ExampleREADME.md', markdownContent, (err) =>
        err 
        ? console.error(colors.red('Error while writing file.', err))
        : console.log('Success! ExampleREADME.md generated.')
        );

    }).catch((error) => {
        console.error('Initialization error.', error);
    });
}
// Function call to initialize app
init();