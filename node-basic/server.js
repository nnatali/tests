var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
        var dataPost = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + ".");

        request.setEncoding("utf8");

        request.addListener("data", function(itemPost) {
          dataPost += itemPost;
          console.log("Received POST '" + itemPost + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, dataPost);
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server started");
}

exports.start = start;
