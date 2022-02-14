function generateMarkdown(data) {
    return `
    # ${data.title}
    https://github.com/${data.githubProfile}/${data.title}



    # Description
    ${data.description}
    
    
    #Table of Contents 
    - [Installation](#installation)
    - [Usage](#usage)
    - [Tests](#test)
    - [License](#license)
    - [User Email] (#userEmail)
    - [Questions] (#questions)
   
    # Installation
    In order to run this application you will need to install the following depedencies ${data.installation}.
    
    # Usage
    ${data.usage}
   
   
    # Tests
    ${data.test}
    
    # License 
    This project is licensed under the ${data.license} license.

    # Contributors
   ${data.contributors}
    
    # Questions
    If you have any questions you can reach out to me at:
    <br>
    [${data.userEmail}](mailto:${data.userEmail})
    <br>
    [GitHub](https://github.com/${data.githubProfile})
  `;
  }
  
  module.exports = generateMarkdown;



  
  