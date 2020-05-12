console.log('Staring app');



//this only register the callback function and ask node to move forward till the timeout

setTimeout(() => {
    console.log('inside of callback');
    
}, 2000);


// Staring app
// finishing app
// inside of callback
// PS I:\PROGRAM\Node.js\weather-app>

//this is with zero timout still it
setTimeout(() => {
    console.log('new settimeout');
    
},0);

console.log('finishing app');

// Staring app
// finishing app
// new settimeout
// inside of callback
// PS I:\PROGRAM\Node.js\weather-app>