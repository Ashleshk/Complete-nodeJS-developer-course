const utils =require('./utils');
const expect =require('expect');


describe('Utils',()=>{
                
        it('should add two numbers',()=>{
            var result = utils.add(33,11);
            // if(result !==44){
            // throw new Error(`Expected 44 but got ${result}`);
            // }
            expect(result).toBe(44).toBeA('number');
        });


        // to test the async test case 
        // done is used to tell mocha that this is async test......it 
        //will not test this until done is called

        it('should aync add two numbers',(done)=>{
        utils.asyncAdd(4,3,(sum)=>{
            expect(sum).toBe(7).toBeA('number');

            //call done after assertion
            done();
        });
        });
        //              aync square 

        it('should async sqaure numbers',(done)=>{
        utils.asyncsquare(4,(sum)=>{
            expect(sum).toBe(16).toBeA('number');

            //call done after assertion
            done();
        });
        });
        //////////////////////////////////////////////

        it('should square a number ',()=>{
        var result = utils.square(4);
        // if(result !==16){
        // throw new Error(`Expected 16 but got ${result}`);
        // }
        expect(result).toBe(16).toBeA('number');

        });
});

it('shoul set first name and last name',()=>{
    var user ={location: 'pune',age:21};
    var res = utils.setname(user,'Ashlesh Khajbage');


    expect(res).toInclude({
        firstname:'Ashlesh',
        Lastname:'Khajbage'
    })
});

// describe used for making readalbity of test(s)
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {  //#sign+method is convetion used
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

it('double done', function(done) {
    // Calling `done()` twice is an error
    setImmediate(done);
   // setImmediate(done);
  });

  it('should expect some value',()=>{
      //expect(12).toNotBe(13);
     // expect({name:'Ashlesh'}).toBe({name:'Ashlesh'});
      //expect({name:'Ashlesh'}).toEqual({name:'Ashlesh'});

      //include property
      //expect([1,2,3]).toInclude(2).toExclude(5);

      expect({
          name:'Ashlesh',
          age:21,
          location:'pune'
      }).toInclude({
          age:21
      });
  });


