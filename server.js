var http = require('http'); // requires core NODE module
var server = http.createServer(handler);
var fs = require('fs');

//var message = "The hills are alive with the sound of music"

function handler (request, response) {
  var endpoint = request.url;
  console.log(endpoint);

  //response.write(message); //response body

  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});

    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  }
}


server.listen(3000, function () {
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});