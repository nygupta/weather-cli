const chalk = require('chalk');

const menus = {
    main:`
        weather [command] <options>

        today .............. show weather for today
        forecast ........... show weather forecast for next 5 days 
        version ............ show package version
        help ............... show help menu for a command`,

    today: `
        weather today <options>
        --location, -l ..... the location to use`,

    forecast: `
        weather forecast <options>
        --location, -l ..... the location to use`
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]
    console.log(chalk.red(menus[subCmd] || menus.main));
}