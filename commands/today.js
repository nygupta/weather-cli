const ora = require('ora');
const request = require('request');
const chalk = require('chalk');

module.exports = async (args) => {
    const snipper = ora().start();
    const location = args.location || args.l;
    if (!location) {
        console.log(chalk.red("Corect Format:"));
        console.log(chalk.red("\tweather today -l <cityname>"));
        console.log(chalk.red("\t\tOR"));
        console.log(chalk.red("\tweather today --location <cityname>"));
        snipper.stop();
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=095779bc6aa304458a5d790560e79afe`;
        request(url, (err, response, body) => {
            try {
                const data = JSON.parse(body);
                console.log(chalk.cyan(`Current condition in ${data.name}:`));
                console.log(`\t${data.main.temp}°C \t ${data.weather[0].main}`);
                snipper.stop();
            }
            catch(err) {
                snipper.stop();
                console.log(chalk.red(err));
            }
        });
    }
}