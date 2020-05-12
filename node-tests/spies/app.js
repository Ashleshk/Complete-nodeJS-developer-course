var db =require('./db.js');

//
//spies  to know whether the function inside function is assesd

module.exports.handleSignup =(email,password)=>{
    //chech if email already exist
    db.saveUser({email,password});
    //save the user to database
    //send welcome email'
   
};