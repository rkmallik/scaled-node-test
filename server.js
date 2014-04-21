#!/bin/env node

var restify = require('restify');

var server = restify.createServer({
	  name: 'cfdemo_rest_notify',
	  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// sample REST call
server.get('/test/:message', function (req, res, next) {
	console.log("recieved REST call with this content: " +req.params.message);
	res.send(req.params.message);
	return next();
});

server.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP, function () {
  console.log('%s listening at %s at '+new Date(), server.name, server.url);
});