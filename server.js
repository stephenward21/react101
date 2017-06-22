 // React/JSX is consider cross-origin. Cross-origin is only supported for:
// http, https, ftp. Our protocol when we load a page is "file:///"
// This requires something with http, https, ftp, etc. at the beginning for the router to function.
// Node js is our answer! With the connect module and teh serveStatic module, we can serve pages up at http://localhost
// This involves:
// 1. npm install connect - this will add the connect module to a node_modules folder. If node_modules doesn't exist, it will be created.
// 2. npm install serve-static - this will add the serve-static module to a node_modules folder. If node_modules doesn't exist, it will be created.
// 3. node server.js - this will tell node you want to run the JS file server.js
// THIS FILE!!

// Node will then serve up anything it finds like usual via http, at http://localhost:8000
// Solving our problem!

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
	console.log('Listening on Port 8080...');
});