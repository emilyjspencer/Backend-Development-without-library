var http = require('http');
var server = http.createServer(handler);

var message = "The hills are alive with the sound of music"
function handler (request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(message); //response body
  response.end(); // finish response
}


server.listen(3000, function () {
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});