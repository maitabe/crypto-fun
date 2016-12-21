var express = require('express');
//node library
var crypto = require('crypto');

var app = express();

/*crypto.createCipher(algorithm, key);
crypto.createDecipher(algorithm, key);*/

//use the algorithm AES192, because its the most popular
var cipher = crypto.createCipher("aes192", "myPassword");

//cypher var text
var text = 'David123';
//invoke the update function with the data we want to encrypt 'text'
//the most used is the utf8 (there is also ascii or binary)
var crypted = cipher.update(text,'utf8','hex');
//you must use cipher.final to kind of finalize your encryption
crypted += cipher.final('hex');
console.log(crypted);

//decipher to decrypt your data
var decipher = crypto.createDecipher("aes192", "myPassword");
var dec = decipher.update(crypted,'hex','utf8');
dec += decipher.final('utf8');
console.log(dec);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});


app.listen(8000, function() {
	console.log('server listening, its working');
});