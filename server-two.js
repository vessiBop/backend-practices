const http = require('http'); // imports the http module into our program.

// code below -- creates a server 
const server = http.createServer((request, response) => {
    console.log('Got a new request to Silvestre');
    if(request.url === '/silvestre') {
    response.write('Hello Silvestre');
    response.end();
} else if (request.url === '/api/greet') {
    console.log('Anon request')
    response.write('Hello World, Greetings from the lab');
    response.end();
}
else {
        console.log('Anon request')
        response.write('Hello World');
        response.end();

    }
});

// Start the server and keep listening to port 4000
server.listen(4000);