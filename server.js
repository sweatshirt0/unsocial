const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const landing = './public/landing.html';
    const style = './public/styles.css';
    if (req.url === '/') {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	fs.readFile(landing, (error, data) => {
	    if (error) {
		res.writeHead(404);
		res.write('Error: File not found.');
	    } else {
		res.write(data);
	    }

	    res.end();
	});
    } else if (req.url === '/styles') {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/css');
	fs.readFile(style, (error, data) => {
	    if (error) {
		res.writeHead(404);
		res.write('Error: File not found.');
	    } else {
		res.write(data);
	    }

	    res.end();
	});
    } else {
	res.statusCode = 404;
	res.end('Not Found.');
    }
});

const port = process.env.port || 8090;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
