const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');


const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address you need weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.address, (errorMessage, results)=> {
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResults)=>{
            if (errorMessage){
                console.log(errorMessage);
            }
            else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});

