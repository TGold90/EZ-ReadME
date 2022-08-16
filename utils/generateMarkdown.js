function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## Credits
  
  [${data.credits}](https://github.com/${data.credits})

  ## License
  
  ${data.license}

  ---
  
  ## Badges
  
  ![license](https://img.shields.io/badge/license-${data.license}-blue)
  
  ## How to Contribute

  ${data.contributions}
  
  ## Tests

  [${data.tests}](${data.tests})

  ## Questions

  Please email <${data.questions}> with questions about this project.

  ---


`;
}

module.exports = generateMarkdown;
