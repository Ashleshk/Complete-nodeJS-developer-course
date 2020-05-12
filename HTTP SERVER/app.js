const http = require('http');
const server = http.createServer((req,res)=>{
  if(req.url === '/')
  {
    res.write('hello world');
    res.end();
  }
  if(res.url ==='/api/courses'){
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});


server.listen(3000);
console.log('Listenning on Port 3000 ......');
