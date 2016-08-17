var express = require('express'),
app = express(),
port = process.env.PORT || 4000;

foldername = process.argv[2];

var fs = require('fs');

try {
    // Query the entry
    stats = fs.lstatSync(foldername);

    // Is it a directory?
    if (stats.isDirectory()) {
 	app.use(express.static(foldername));
	app.listen(port);      
    }
}
catch (e) {
    console.log("Please provide a valid directory for web root"); 
}


