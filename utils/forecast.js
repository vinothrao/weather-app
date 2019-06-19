const request = require("request");

const forecast = (latlong, callback) => {
  var url =
    "https://api.darksky.net/forecast/c962bbaa8ab779273e6adbf54cade8a0/" +
    latlong;

  request({ url: url, json: true }, (error, { body }) => {
    const { currently, daily, timezone } = body;
    if (error) callback(error);
    if (!daily) {
      callback("City not found");
    } else {
      var message = {
        forecast:
          daily.data[0].summary +
          " It is currently " +
          currently.temperature +
          " degress out. There is a " +
          currently.precipProbability +
          "% chance of rain.",
        timezone
      };

      callback(undefined, message);
    }
  });
};

module.exports = forecast;
