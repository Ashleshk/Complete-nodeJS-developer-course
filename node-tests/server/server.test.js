const request = require('supertest');
const expect=require('expect');


var app = require('./server').app;

//servers describe
describe('Server',()=>{
        describe('GET /',()=>{
            it('should return hello world response', (done)=>{
                request(app)
                    .get('/')
                    .expect(404)
                    .expect((res)=>{
                        expect(res.body).toInclude({
                            error:'page not found.'
                        });
                    })
                    .end(done);
            });
             
        });

        describe('GET ./Users',()=>{
            
            //make a new test
            //assert 200
            //assert that you exist in array

            it('should return my usrr object',(done)=>{
                request(app)
                    .get('/users')
                    .expect(200)
                    .expect((res)=>{    
                        expect(res.body).toInclude({
                            name:'Ashlesh',
                            age:21
                        });
                    })
                    .end(done);
            });

        });
});


