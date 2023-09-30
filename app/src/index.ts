import express from "express";
import httpProxy from "http-proxy";

var apiProxy = httpProxy.createProxyServer();
const devHowServer = "http://localhost:3000";
const howServer = "http://localhost:3001";
const abhasServer = "http://localhost:3002";
const app = express();

app.use((req, res, next) => {
  const { hostname } = req;
  if (hostname.startsWith("dev")) {
    apiProxy.web(req, res, { target: devHowServer });
  } else if (hostname.startsWith("abhas")) {
    apiProxy.web(req, res, { target: abhasServer });
  } else {
    apiProxy.web(req, res, { target: howServer });
  }
});

app.listen(1234, () => {
  console.log("server started");
});
