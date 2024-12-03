## README.md Generator
  ![License: MIT](https://img.shields.io/badge/license-MIT-blue)

  ## Description
Every good project requires a quality README file that provides essential information about the application. This includes details about the app’s purpose, usage instructions, installation process, reporting issues, and contribution guidelines.This command-line application, powered by Node.js, dynamically generates a README.md file based on input about your project. For an example, refer to the ExampleREADME.md file in this repository.

## Table of Contents
-[Description] (#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)

## Installation
To generate your own README, clone the repository to your local machine so that you have the Node project installed on your computer.Next, run npm install to install the specified npm package dependencies as outlined in the package.json file.The application will prompt you for input from the command line using inquirer. To generate the README, answer the prompts in the command line.After answering all the prompts, a README file named ‘ExampleREADME.md’ will be created and placed at the root of the repository.The README file will include automatically generated badges for your repository courtesy of shields.io and will display your GitHub profile and email.

## Usage
When you run node index.js, the application prompts you in the command line with a series of questions about your GitHub and project.Based on your responses to the Inquirer prompts, the application generates markdown and a table of contents for the README. If you don’t answer the optional questions, such as Installation, an Installation section won’t be included in your README. The README will also include badges for your GitHub repo.Finally, fs.writeFile generates your project’s README.md file. Check out the ExampleREADME.md in this repo for an example of the final output.

## License
License: https://opensource.org/licenses/MIT

## Contributing
Contributions are always welcome! To contribute, follow these steps:- Fork the repository.- Create a new branch for your feature. For example, “git checkout -b feature/name”.- Commit your changes. For instance, “git commit -m ‘Add feature’”.- Push the branch. For instance, “git push origin feature-name”.- Open a Pull Request for review.

## Test
To run the tests for this application, execute the following command:npm testEnsure that all tests pass before submitting your contributions.

## Questions

Contact me for any further questions;
-Github: [undefined] (https://github.com/rvrutan)
-Email: [rutanroni@gmail.com](mailtorutanroni@gmail.com)
