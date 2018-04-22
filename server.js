var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("log-site");
});

app.get("/auth/google", function(req, res) {
  res.render("success", {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  });
});

app.listen(3000);
app.use(function(req, res, next) {
  res.status(404).send("Wybacz, nie mogliśmy odnaleźć tego, czego żadasz");
});
