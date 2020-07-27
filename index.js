const express = require("express");

const exhbs = require("express-handlebars");

const track = require("novelcovid");

// track.all().then((response) => console.log(response));

// to track according to countries
// track.countries().then((response) => console.log(response));

const app = express();

app.set("view engine", "hbs");

app.engine(
  "hbs",
  exhbs({
    extname: "hbs",
    defaultView: "home",
    layoutsDir: __dirname + "/views/layouts/",
  })
);

app.get("/countries", (req, res) => {
  track.countries().then((response) => res.render("home", { info: response }));
});

app.listen(4000, () => {
  console.log("app is listning on port 4000");
});
