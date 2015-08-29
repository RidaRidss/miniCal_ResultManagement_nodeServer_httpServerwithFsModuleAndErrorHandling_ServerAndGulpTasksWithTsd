/**
 * Created by Rida on 8/28/2015.
 */
httpserver = require('http');httpserver.createServer(function(req,res){res.writeHead(200, {'Content-Type': 'text/html'});res.write("<html><head><title>Server Requests Transmission</title></head><body><script>alert('Attention please : Session start ! Hit a request from Node Server')</script><h3>Attention please : Session start ! Wellcome to first request from Node Server</h3></body></html>");res.end();}).listen(3000,function(){console.log("\n \n Req Hit from Browser \n \n  please check this request here : http://127.0.0.1:3000");});