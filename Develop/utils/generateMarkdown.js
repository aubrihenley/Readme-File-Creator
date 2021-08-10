// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch (license) {
    case "Apache License 2.0":
      badge = `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
      break;
    case "GNU GPLv3":
      badge = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
      break;
    case "GNU GPLv2":
      badge = `https://img.shields.io/badge/License-GPLv2-blue.svg`;
      break;
    case "ISC License":
      badge = `https://img.shields.io/badge/License-ISC_License-blue.svg`;
      break;
    case "MIT":
      badge = `https://img.shields.io/badge/License-MIT-green.svg`;
      break;
    default:
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  switch (license) {
    case "Apache License 2.0":
      link = `https://choosealicense.com/licenses/apache-2.0/`;
      break;
    case "GNU GPLv3":
      link = `https://choosealicense.com/licenses/gpl-3.0/`;
      break;
    case "GNU GPLv2":
      link = `https://choosealicense.com/licenses/gpl-2.0/`;
      break;
    case "ISC License":
      link = `https://choosealicense.com/licenses/isc/`;
      break;
    case "MIT":
      link = `https://choosealicense.com/licenses/mit/`;
      break;
    default:
      link = "";

  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === ""){
    let licenseSection = "";
    return licenseSection;
  }else {
    let licenseSection= `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
    return licenseSection;
  }
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ${renderLicenseSection(data.license)}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

![Screenshot of App](${data.screenshot})

${data.video}

## Credits
${data.collaborators}

## License
This project is covered by the [${data.license}](${renderLicenseLink(data.license)}) license.

## How to Contribute
*If you would like to contribute, you can follow these guidelines for how to do so.*\n
${data.contributing}

## Tests
${data.tests}

## Questions
Please feel free to reach out and send any questions or comments to me at:\n
GitHub: https://github.com/${data.userName}

email: ${data.email}
`;
}

module.exports = generateMarkdown;