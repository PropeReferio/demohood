const express = require('express');
const app = express();
var path = require('path');
//These are like imports

//Tell our Express Server What File Directory to use
app.use(express.static(__dirname + '/dist/demohood'));

//Tell Our Express Server What Port to listen on
app.listen(process.env.PORT || 8080); //localhost/8080 if it fails

//Start Angular App via index file
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/demohood/index.html'));
})

console.log('Console listening on port 8080');