var querystring = require("querystring");

function start(response, postData) {
  console.log("Start page.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="text" name="user" />'+
		'<input type="submit" value="Submit" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, dataPost) {
	console.log("Upload page.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Your text: " + 
	querystring.parse(dataPost)["text"] + " and your user: " +
	querystring.parse(dataPost)["user"]);
	response.end();
}

exports.start = start;
exports.upload = upload;