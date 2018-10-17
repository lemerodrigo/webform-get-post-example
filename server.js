const http = require('http');
const PORT = '8888';

http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const { headers, method, url } = request;
    const responseBody = { headers, method, url, body };
    response.write(JSON.stringify(responseBody));
    response.end();
  });
}).listen(PORT);

console.log(`Node server running on port ${PORT}`);