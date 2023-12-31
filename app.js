const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (require, response) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bursa&appid=314ad23c73944396a05f010c3345b2b6&units=metric";
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
           const weatherData = JSON.parse(data);
           const temp = weatherData.main.temp;
           console.log(temp);

           const description = weatherData.weather[0].description
           console.log(description);
        })
    })
    response.send("Serves is up and running.")
})




app.listen(3000, function () {
    console.log("Server is running on port 3000.")
})