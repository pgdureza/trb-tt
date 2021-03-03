var express = require("express");
var app = express();

const PORT = 3000;
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.use("/styles", express.static("styles"));
app.use("/javascript", express.static("javascript"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
