// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ${renderLicenseBadge(data)}
  ${renderLicenseLink(data)}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage

![Screenshot of App](${data.screenshot})

[Demo Video](${data.video})

## Credits
${data.collaborators}

## License
${renderLicenseSection(data)}

## How to Contribute
${data.contributing}

## Tests
${data.tests}

## Questions

${data.userName}
${data.email}
`;
}

module.exports = generateMarkdown;

//data from inquirer passed to this file
//![NPM](https://img.shields.io/npm/l/inquirer)