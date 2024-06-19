const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project:",
  },
  // Add more questions as needed
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("README.md file has been generated!")
  );
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content based on user answers
      const readmeContent = `
# ${answers.title}

## Description
${answers.description}
`;

      // Write README file
      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.error("Error occurred during initialization:", error);
    });
}

// Function call to initialize app
init();
