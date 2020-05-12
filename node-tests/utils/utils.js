module.exports.add= (a,b)=> a+b;

module.exports.asyncAdd =(a,b,callback)=>{
    setTimeout(() => {
        callback(a+b);
    }, 1000);//loca assumes if your test longer than 2 sec as failure 
};
module.exports.square =(x)=>x*x;

//async squre methid
module.exports.asyncsquare=(a, callback)=>{
    setTimeout(() => {
        callback(a*a);
    }, 1000);//loca assumes if your test longer than 2 sec as failure 
};

module.exports.setname =(user, fullname)=>{
    var names =fullname.split(' ');
    user.firstname = names[0];
    user.Lastname = names[1];
    return user;
}