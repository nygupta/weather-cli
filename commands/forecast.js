const ora = require('ora');
const request = require('request');

module.exports = async (args) => {
    const snipper = ora().start();
    try {
        const location = args.location || args.l;
        if (!location) {
            console.log("Corect Format:");
            console.log("\tweather forecast -l <cityname>");
            snipper.stop();
        }
        else {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=095779bc6aa304458a5d790560e79afe`;
            request(url, (err, response, body) => {
                const data = JSON.parse(body);
                console.log(`Weather Forecast for ${data.city.name}:`);
                for (var i = 0; i < 40; i = i + 8){
                    const date = data.list[i].dt_txt;
                    const min_temp = data.list[i].main.temp_min;
                    const max_temp = data.list[i].main.temp_max;
                    console.log(`\tDate: ${date[8]}${date[9]}${date[7]}${date[5]}${date[6]}\tMin Temp: ${min_temp}°C\tMax Temp: ${max_temp}°C`);
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