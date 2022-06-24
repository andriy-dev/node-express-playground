const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
  res.end(`<h1>404</h1> <a href="/">Back to home</a>`);
});

server.listen(5000);