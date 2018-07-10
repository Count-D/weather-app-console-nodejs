const request = require('request');


var getWeather = (lat, lng, callback) => {
request({
    url: `https://api.darksky.net/forecast/91a41a0eaeab9f585ab42300c08fd72d/${lat},${lng}`,
    json: true
}, (error, response, body)=>{
    if(!error && response.statusCode === 200){
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    }
    else {
        callback('Unable to connect to Dark Sky');
    }
    
});
};

module.exports.getWeather = getWeather;