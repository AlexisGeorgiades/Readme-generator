const inquirer = require ('inquirer');
const fs = require( 'fs');
const util = require ('util');
const generateMarkdown= require('./generateMarkdown')


   const questions= [
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}


        },

        {
            type: 'input',
            message: 'Can you describe the project?',
            name: 'description',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}

        },

        {
            type: 'input',
            message: 'What were the steps implemented to install this project?',
            name: 'installation',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}

        },

        {
            type: 'input',
            message: 'What is the purpose of this project?',
            name: 'usage',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}
        },

        { 
            type: 'input',
            message: 'With what commands could you perform a test if needed?',
            name: 'test',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}
        },

        {
            type: 'input',
            message: 'What licensed was used for your project?',
            name: 'license',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}
        },

        {
            type: 'input',
            message: 'What email address do you use so that we can reach you?',
            name: 'userEmail',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}
        },

        {
            type: 'input',
            message: 'What is the username of your GitHub profile?',
            name: 'githubProfile',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}
        },

        {
            type: 'input',
            message: 'Who are the contributor(s) for this project?',
            name: 'contributors',
            validate:(value)=>{if (value){return true} else {return 'You need to enter a value to continue.'}}
        }

   ]

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
            err ? console.log(err) : console.log('Your README file has succesfully been generated!')
        )}
    
    function init() {
        inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
            writeToFile("README.md", generateMarkdown(data))
        }
        )
    }

    init();




