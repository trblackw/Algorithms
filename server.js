const express = require("express");
const hbs = require("hbs");

const app = express();
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

//logger middleware
// app.use((req, res, next) => {
//   let now = new Date().toLocaleTimeString("en-us");
//   console.log(`${now}: ${req.method}, ${req.url}`);
//   next();
// });

app.get("/", (req, res) => {
  res.render("index.hbs", {
    pageTitle: "Algorithms",
    currentYear: new Date().getFullYear(),
    testTemplate: "Just testing to make sure handlebars is up and running!"
  });
});

app.listen(3000, () => console.log("app running on port 3000!"));
