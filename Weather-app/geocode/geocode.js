const  request = require('request');

var geocodeAddress = (address,callback ) => {
    var encodedAddress = encodeURIComponent(address);


    request({
        // below url is changed to this becoz to remove error of OVER_QUEUE_LIMIT
        /*
                    check the following link
                    http://links.mead.io/api-fix
        */
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=T30ZZg3ly00seypHNBA0eDrBa6Yam1AT&location=${encodedAddress}`,
        json: true
    },(error ,response,body)=>{
        //console.log(body);
        if(error){
            callback('Unable to connect to Google servers...');
             
            
        }else if(body.info.statuscode === 400){
            callback( 'Unable to find that address..');
                
        }
        else if(body.info.statuscode === 0){
            callback( {
                address: body.results[0].providedLocation.location,
                latitude : body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
            // console.log(`Address :${body.results[0].providedLocation.location}`);
            // console.log(`latitude : ${body.results[0].locations[0].latLng.lat}`);
            // console.log(`longitude : ${body.results[0].locations[0].latLng.lng}`);
        }
    
        //console.log(response);
        //console.log(error);
     
    });

};

module.exports.geocodeAddress = geocodeAddress;