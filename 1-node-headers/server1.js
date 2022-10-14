const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    if(req.url === '/dog') {
        res.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMDdG3pQ4NA-qB6nvu7E9_R_do5saY4_tiYkC7fQe7M6VWum6JvzBVrrSdwUsO7adwQQ&usqp=CAU' width='100%'>");
        res.end();


    } else if (req.url === '/cat') {
        res.write("<img src='https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6ba011b74a9f7a5c8322fe75478d9df'></img>");
        res.end();

    }
});

server.listen(4000);
