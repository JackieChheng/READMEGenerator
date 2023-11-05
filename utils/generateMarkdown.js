function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license) {
    return `[License](https://choosealicense.com/licenses/${license})`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. See the [License](#license) section for more details.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
## Tables of Content
- [Description](#Description)
- [Installation](#installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributors
${data.contribution}

## Tests
${data.test}

## Questions
If you have any questions, you can reach out to [${data.creator}](https://github.com/${data.creator}) or contact them at ${data.question}.
`;
}

module.exports = generateMarkdown;
