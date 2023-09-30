'use strict';

var express = require('express');
var httpProxy = require('http-proxy');

var apiProxy = httpProxy.createProxyServer();
var devHowServer = "http://localhost:3001";
var howServer = "http://localhost:3000";
var abhasServer = "http://localhost:3002";
var app = express();
app.use(function (req, res, next) {
    var hostname = req.hostname;
    if (hostname.startsWith("dev")) {
        apiProxy.web(req, res, { target: devHowServer });
    }
    else if (hostname.startsWith("abhas")) {
        apiProxy.web(req, res, { target: abhasServer });
    }
    else {
        apiProxy.web(req, res, { target: howServer });
    }
});
app.listen(1234, function () {
    console.log("server started");
});
