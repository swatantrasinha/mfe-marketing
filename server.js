const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();
console.log('__dirname is : ', __dirname);
// var distFolder = path.join(__dirname, 'dist');

//console.log('distFolder is : ', distFolder);

// app.use('/', express.static(distFolder));
app.use('/', express.static(__dirname));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist', 'index.html'));
});

app.listen(port);
