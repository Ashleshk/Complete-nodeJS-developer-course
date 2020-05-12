const expect = require('expect');
const rewire = require('rewire');


var app = rewire('./app');
///app.__set__
///app.__get__    // this method to make simualtion of db object from db.js
//
//               //and swap the function with spy


describe('App',()=>{

    var db ={
        saveUser: expect.createSpy()
    };
    //replace it 
    app.__set__('db', db);

    it('should call the spy correctly',()=>{
            //creating a sspy
                 var spy=expect.createSpy();  //createspy will return a function that will
                //swap for real one

                //inject spy in code/function
                //spy();   
                spy('ashlesh',21);
                
                //set up series of assert(s)
                //expect(spy).toHaveBeenCalled();
                expect(spy).toHaveBeenCalledWith('ashlesh', 21);

    });

    it('should call saveuser with user object',()=>{
        var email = 'andrew@example.com';
        var password = '123abc';
    
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
  
  });
  