const ora = require('ora');
const request = require('request');
const chalk = require('chalk');

module.exports = async (args) => {
    const snipper = ora().start();
    try {
        const location = args.location || args.l;
        if (!location) {
            console.log(chalk.red("Corect Format:"));
            console.log(chalk.red("\tweather forecast -l <cityname>"));
            console.log(chalk.red("\t\tOR"));
            console.log(chalk.red("\tweather forecast --location <cityname>"));
            snipper.stop();
        }
        else {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=095779bc6aa304458a5d790560e79afe`;
            request(url, (err, response, body) => {
                const data = JSON.parse(body);
                console.log(chalk.cyan(`Weather Forecast for ${data.city.name}:`));
                for (var i = 0; i < 40; i = i + 8){
                    const date = data.list[i].dt_txt;
                    const min_temp = data.list[i].main.temp_min;
                    const max_temp = data.list[i].main.temp_max;
                    console.log(`\tDate: ${date[8]}${date[9]}${date[7]}${date[5]}${date[6]} \t Min Temp: ${min_temp}°C \t Max Temp: ${max_temp}°C \t ${data.list[i].weather[0].description}`);
                }
                snipper.stop();
            });
        }
    }
    catch(err) {
        console.log(err);
        snipper.stop();
    }
}