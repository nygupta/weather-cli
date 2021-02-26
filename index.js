const minimist = require('minimist');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    const cmd = args._[0] || 'help';
    if (args.version || args.v)
        cmd = 'version'
    if (args.help || args.h)
        cmd = 'help'
    switch (cmd) {
        case 'help':
            require('./commands/help')(args);
            break;
        case 'version':
            require('./commands/version')(args);
            break;
        case 'today':
            require('./commands/today')(args);
            break;
        case 'forecast':
            require('./commands/forecast')(args);
            break;
        default:
            console.log(`"${cmd} is not a valid command!"`);
            require('./commands/help')(args);
            break;
    }
}