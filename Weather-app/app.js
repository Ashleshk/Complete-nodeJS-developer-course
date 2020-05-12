const yargs  = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
            .options({
                a: {
                    demand : true,
                    alias: 'address',
                    describe: 'Address to fetch weather for',
                    string: true
                }
            })
            .help()
            .alias('help','h')
            .argv;

geocode.geocodeAddress(argv.address, (errorMessage,results) =>{
    if(errorMessage)
    {
        console.log(errorMessage);
        
    }else{
        //before adding getWeather Function .... this was staement to print object
        //console.log(JSON.stringify(results,undefined,2));

        //after the getweather function shifted inside this call 
        console.log(results.address);        
        weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
            if(errorMessage)
            {
                console.log(errorMessage);
                
            }else{
               // console.log(JSON.stringify(weatherResults,undefined,2));
                console.log(`its currently ${weatherResults.temperature}. But it feels like ${weatherResults.apparentTemperature}. `);
                
            }
        });
        
        
    }
});

//Dark Sky forecast api key 
/*   c9ea14a026c159bb5ecb6848b0ea492f  */


 
 