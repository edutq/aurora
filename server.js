var express = require("express");
var app = express();
port = process.env.PORT || 3000;

app.listen(port);

console.log("app started on port "+ port);
