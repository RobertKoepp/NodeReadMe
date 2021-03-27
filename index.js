const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")





// array of questions for user

const questions = [
{
    type: "input", 
    name: "title",
    message: "What is your project's name?",

}, 
{
    type: "input", 
    name: "email",
    message: "What is your email address?",  
},
{
    type: "input", 
    name: "github",
    message: "What is your GitHub?",  
},
{
    type: "input", 
    name: "description",
    message: "Tell us about your project?",  
//input for license should be type:"list"

},
{type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
//this says "write a file and sync it to a specified path" cwd = current working directory 

// function to initialize program
function init() {
inquirer.prompt(questions).then(function(inquirerAnswers){
    writeToFile("README.md", generateMarkdown({...inquirerAnswers}))
})
}

// function call to initialize program
init();
