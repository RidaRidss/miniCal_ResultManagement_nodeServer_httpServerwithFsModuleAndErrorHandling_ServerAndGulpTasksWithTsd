/**
 * Created by Rida on 8/28/2015.
 */
var httpServer = require('http');
httpServer.createServer(function(req,res){
    //var h1 = document.createElement("h1");
    //body.appendChild(h1);
    //h1.innerText("Hello");
    console.log(" AttentionPlease : Request Hit from Browser");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<html>");
    res.write("<body>");
    res.write("<script>");
    res.write('console.log("Req Hit from node");');
    res.write('alert("Attention Please: Session Start! Hit a request from Node Server");');
    res.write("</script>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}).listen(3000,function() {
    console.log("Server listening on port 3000");
});
