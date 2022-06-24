
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application
const inquirer = require ('inquirer')
const fs = require ('fs')
// TODO: Create an array of questions for user input
const generateReadMe = ({ name, Description, instal, usage, test, license, github, email   }) => `

  

# ${name} 

${Description}


# Table of Contents

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)


![caption](https://ibb.co/b7T63JN)
## Installation

${instal}


## Usage

${usage}

## Test Instructions
${test}

## 🚀 About Me
I'm a full stack developer...  ${github}

Need More Questions ? 
${email}


## License

${license}

## Appendix

Created with 🧘🏾

## Authors

- [@sardaslar](https://www.github.com/sardaslar)


`;

inquirer
.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Please enter Project title',
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Please Enter Descripton of your Project',
    },

    {
        type: 'input',
        name: 'instal',
        message: 'Please Enter Installation Instructions of your Project',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please Enter Usage Information of your Project',
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please Enter Test Instructions of your Project',
    },

    {
        type: 'List',
        message: 'What type of License?',
        name: 'license',
        choices: ['MIT', 'CIS', 'UNLICENSED', 'WHATEVER'],
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please Enter your Git Hub Username',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please Enter your E-Mail Address',
    },

   
])
.then((answers) => {
    const ReadmeCreate = generateReadMe(answers);

    fs.writeFile('readMe.md', ReadmeCreate, (err) =>
    err ? HTMLFormControlsCollection.log(err) : console.log('Your High Quality ReadMe Is Ready!')
    );
});






// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
