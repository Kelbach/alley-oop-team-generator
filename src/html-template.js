teamHTML = [];

const generateHTML = team => {
    const generateManager = manager => {
        return `
        //generate Manager HTML here
        `
    }
    const generateEngineer = engineer => {
        return `
        //generate Engineer HTML here
        `
    }
    const generateIntern = intern => {
        return `
        //generate Intern HTML here
        `
    }

    teamHTML.push(team.filter(employee => ))
}

module.exports = team => {
    return `
    //put page HTML here
    ${generateHTML(teamHTML)}
    `
}