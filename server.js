var http = require("http");
var fs = require("fs");

var server = http.createServer();

server.on("request", function(request, response) {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  // if (request.method === "GET" && request.url === "/") {
  //response.write("<h1>Hello World!</h1>");
  //response.end();
  // } else {
  //response.statusCode = 404;
  // response.write("<h1>404: Zła ścieżka!</h1>");
  // response.end();
  //  }
  fs.readFile("./index.html", null, function(error, data) {
    if (request.method === "GET" && request.url === "/") {
      //response.writeHead(404);
      response.write(data);
    } else {
      response.statuscode = 404;
      response.write(
        `<img src='https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/404-error.png' />`
      );
    }
    response.end();
  });
});

server.listen(8080);
