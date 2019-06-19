const express = require("express");
const forecast = require("../utils/forecast");
const geocode = require("../utils/geocode");
const path = require("path");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  var city = req.query.city;
  geocode(city, (error, { long, lat }) => {
    var longlat = long + "," + lat;
    forecast(longlat, (error, forecast) => {
      res.send({ error, forecast, city });
    });
  });
});

app.listen("4000", () => {
  console.log("Express is runnning!");
  console.log(publicDirectoryPath);
});
