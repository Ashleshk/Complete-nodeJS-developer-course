//this is to learn ES6 in node 


var asyncAdd = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a === 'number' && typeof b ==='number')
                resolve(a+b);
            else{
                reject('Arguments must be numbers..');
            }    
        }, 1500);
    });
};
/*     this is chaining of two promises 
        it is error in it if condition at 1st promises fails
        it prints error of it and continue to next   */

// asyncAdd(5,'7').then((res)=>{
//         console.log('Result : '+res);
//         return asyncAdd(res,33);
// },(errorMessage)=>{
//         console.log(errorMessage);
        
// }).then((res)=>{
//         console.log('Should be 45:'+res);
        
// },(errorMessage)=>{
//     console.log(errorMessage);
    
// });


/**            the above issue is resolved in following  */
asyncAdd(5,'7').then((res)=>{
    console.log('Result : '+res);
    return asyncAdd(res,33);
}).then((res)=>{
    console.log('Should be 45:'+res);
    
}).catch((errorMessage)=>{
    //here catch is used to handle all error of promises
        console.log(errorMessage);
        
});


//        request library does not support promise        //
/******************************************************** */











var somePromise = new Promise((resolve , reject) =>{

    // here the "promise" in state of "pending"
    setTimeout(() => {

        /*
                    you can resolve once 
                    or you can reject once 
                    not both together or twice
        */
        resolve('hey It worked!');
        reject('unable to Fulfill promise');

        //after this the promise state i "Settle"
    }, 2500);
    

});

//if the promise is resolved or rejected then what to do .......
somePromise.then((message)=>{
    // if the promise successed to resolve .... do this  ..  here there can be funcrtion call
        console.log('Success  ' + message);
        
},(errorMessage) =>{
    // if rejected
    console.log('Error : ' + errorMessage);
    
});