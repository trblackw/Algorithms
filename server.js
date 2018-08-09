const express = require("express");
const hbs = require("hbs"); // handlebars

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/index.hbs"));

app.get("/", (req, res) => {
    res.render('index.hbs');
})




app.listen(3000, () => console.log('app running on port 3000!'))