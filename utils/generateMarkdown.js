// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/license-MIT-blue)";
    case "Apache 2.0":
      return "![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square)";
    case "Zlib":
      return "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)";
    case "WTFPL":
      return "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }

  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "Zlib":
      return "https://www.zlib.net/zlib_license.html";
    case "WTFPL":
      return "http://www.wtfpl.net/about/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }
  return `License: ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
${data.description}

## Table of Contents
-[Description] (#description)
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions

Contact me for any further questions;
-Github: [${data.github}] (https://github.com/${data.username})
-Email: [${data.email}](mailto${data.email})
`;
}

export default generateMarkdown;
