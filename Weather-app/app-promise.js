const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var defaultAddress = "pune";
var encodedAddress = encodeURIComponent(argv.address || defaultAddress);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

 
axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/c9ea14a026c159bb5ecb6848b0ea492f/${lat},${lng}`;
  
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);

}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  var humidity = response.data.currently.humidity;
  var precipProb = response.data.currently.precipProbability;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
  console.log(`It also seems to rain since humidity is ${humidity}..`);
 
  if (precipProb === 0){
    precipProb = "Don't worry! It's not raining anytime soon";
    }
    else{
        precipProb = "Brace yourself for a rainy day";
    }
    var wearWhat = '';
    if (apparentTemperature > 70){
        wearWhat = "It's nice outside! Wear something light and summer-y :)"
    }
    else if (apparentTemperature>60 && apparentTemperature<70){
        wearWhat = "Look classy ;) It's pleasant outside"
    }
    else {
        wearWhat = "Wear a jacket duuuude!"
    }
}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
}); 

//console.log('Loading weather info...');