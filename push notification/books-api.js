// var fs = require("fs");
//  console.log("\n *STARTING* \n");
// // Get content from file
//  var contents = fs.readFileSync("jsoncontent.json");
// // Define to JSON type
//  var jsonContent = JSON.parse(contents);
// // Get Value from JSON
//  console.log("User Name:", jsonContent.username);
//  console.log("Email:", jsonContent.email);
//  console.log("Password:", jsonContent.password);
// console.log("\n *EXIT* \n");y
const request = require('request');

request({
    url:'https://www.googleapis.com/books/v1/volumes?q=isbn:1449344682',
    json:true
},(error,response,body)=>{
    console.log(body);
    
}
);