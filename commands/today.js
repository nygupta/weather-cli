const ora = require('ora');
const request = require('request');

module.exports = async (args) => {
    const snipper = ora().start();
    try {
        const location = args.location || args.l;
        if (!location) {
            console.log("Corect Format:");
            console.log("\tweather today -l <cityname>");
            snipper.stop();
        }
        else {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=095779bc6aa304458a5d790560e79afe`;
            request(url, (err, response, body) => {
                const data = JSON.parse(body);
                console.log(`Current condition in ${data.name}:`);
                console.log(`\t${data.main.temp}°C \t ${data.weather[0].main}`);
                snipper.stop();
            });
        }
    }
    catch(err) {
        snipper.stop();
        console.log(err);
    }
}