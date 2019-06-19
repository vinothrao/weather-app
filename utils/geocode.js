const request = require("request");

const geocode = (location, callback) => {
  const geoCodeURl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    location +
    ".json?access_token=pk.eyJ1Ijoidmlub3RocmFvIiwiYSI6ImNqd3owemw2eTFiaTAzeW41c2hxeXZla2MifQ.Uximc3Y1AacEKqhw3GUrlg&limit=1";

  request({ url: geoCodeURl, json: true }, (error, response) => {
    if (error) {
      callback(error);
    } else {
      var long = response.body.features[0].center[0];
      var lat = response.body.features[0].center[1];
      callback(undefined, { long: long, lat: lat });
    }
  });
};

module.exports = geocode;
