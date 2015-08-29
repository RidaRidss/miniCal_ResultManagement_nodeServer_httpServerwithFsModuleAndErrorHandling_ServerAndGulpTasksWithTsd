/**
 * Created by Rida on 8/29/2015.
 */

///<refrence path = "./tsd_pracitce/tsd_to_write_gulp/task/task_file.d.ts">


var http = require("http");var fs = require("fs");var server = http.createServer(function (req, res) {res.writeHead(200, {'Content-Type': 'text/html'});res.write("<html><head><title>Check Node Server Request Type</title></head><body><script>alert('Attention please : Hit a Checking Request from Node Server , either it is GET or POST Request')</script></body></html>");res.end();});server.listen(3000,function(){console.log("\n \n Hit a Checking Request(GET or POST)'s Respond from Browser")});
