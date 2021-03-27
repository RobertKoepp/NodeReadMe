// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${data.email}

# ${data.github}

# ${data.description}

`;
}

module.exports = generateMarkdown;
