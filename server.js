

var http = require("http");
var url = require("url");


function start(route, handle) {
	function onRequest(request, response) {
	  console.log("Request received.");
	  var pathname = url.parse(request.url).pathname; 
	  // parse cuts up the url...
	  console.log("Request for " + pathname + " recieved");

	  route(handle, pathname)
	  // Dont understand line 14

	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello World");
	  response.end();
	};

	http.createServer(onRequest).listen(8888);
   	console.log("Server has started.");
};

exports.start = start; 


 //  switch(path) {
	//   	case '/':
	// 	  response.writeHead(200, {"Content-Type": "text/plain"});
	// 	  response.write("Hello World");
	// 	  	break;
	// 	default:
	// 	response.writeHead(404)
	// 	response.write("Nothing to see here")
	// 	}
	// 	response.end();

	// };

// console.log("Server has started.");

//  // Asynchronous it takes the query and sends it to the database. But instead of waiting for it 
//  // to be finished, it makes a mental note that says "When at some point in the future the 
//  // database server is done and sends the result of the query, then I have to execute the 
//  // anonymous function that was passed to database.query()."
// database.query("SELECT * FROM hugetable", function(rows) {
//   var result = rows;
// });
// console.log("Hello World");


// Synchronous. First do the database query, and only when this is done, then write to the console.
// var result = database.query("SELECT * FROM hugetable");
// console.log("Hello World");