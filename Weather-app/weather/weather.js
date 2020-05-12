

const request = require('request');
var getWeather = (lat,lng,callback) =>{
    request({
        url:`https://api.forecast.io/forecast/c9ea14a026c159bb5ecb6848b0ea492f/${lat},${lng}`,
        json: true
      }, (error, response, body) => {
        if (error) {
          callback('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400) {
          callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined,{
                temperature :body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature,
                humidity : body.currently.humidity,
                precipProbability: body.currently.precipProbability
            });
          
        }
      });
    
    
};

  module.exports.getWeather = getWeather;