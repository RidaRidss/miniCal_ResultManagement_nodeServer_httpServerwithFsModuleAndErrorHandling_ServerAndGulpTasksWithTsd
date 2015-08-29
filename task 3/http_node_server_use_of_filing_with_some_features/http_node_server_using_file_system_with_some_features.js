/**
 * Created by Rida on 8/29/2015.
 */
var fs = require("fs");
fs.readFile("file1.txt", "utf8", function(error, data) {if(error){     res.end(error.toString());     return; }console.log("\n \n this data is from file 1 \n \n");console.log(data + "\n \n ");});/* This data will execute First */var data = fs.readFileSync("file2.txt", "utf8");console.log("\n \n this data is from file 2 \n \n");console.log(data);

