const http = require("http");

const port = 5000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });

    res.end("Hello world");
  })
  .listen(port);

// eslint-disable-next-line no-console
console.log(`Server running on ${port} port`);
