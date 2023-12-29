const fs = require('fs');
const http = require('http');

/////////////////////////////
// FILES
// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about avocado: ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written');

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1)=>{
//    if (err) {
//       return console.log('ERROR!💥');
//    }
//    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2)=>{
//       console.log('data2:', data2);
//       fs.readFile('./txt/append.txt', 'utf-8', (err, data3)=>{
//          console.log('data3:', data3);
//
//          fs.writeFile('.txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//             console.log('Your fie has been written 😊')
//          })
//       })
//    })
// });
// console.log('Will read file');

////////////////////////////
//SERVER
// Create server
// each time a request hits our server,
// the hello from server callback function will be called
const server = http.createServer((req, res)=>{
   // console.log('req: ', req);
   res.end('Hello from the server');
})

// Start server.
// 8000 port is what we listen to.
// it is a sub address on a certain host.
// can define a local host (current computer)
// The default standard ip address is 127.0.0.1.
server.listen(8000, '127.0.0.1', () =>{
   console.log('Listening to requests on port 8000');
})
// we created our server using createServer and passed in a callback function
// that is executed each time that a new request hits the server.
// Then We start listening for incoming requests in
// the local host ip in the port 8000.
// Once we had this running, we actually did the request
// by hitting that url on local host on port 8000.
// under the hood of nodejs, an event was fired
// This event made it so that the callback function was called.
// As a result of that, we got the 'Hello from the server' string.



