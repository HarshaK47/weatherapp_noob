const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=jaipur&units=metric&appid=ca7627c21ce58a07a9f0a3ce5cb6dd6e#";
    https.get(url, function (response) {
        console.log(response.statusCode);


        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            // const object = {
            //     name: "Harsh",
            //     favouriteMovie: "Boom"
            // }
            // console.log(JSON.stringify(object));
            const temp = weatherData.main.temp;
            const iconer = weatherData.weather[0].icon;

            const weatherDesc = weatherData.weather[0].description;
            const imageURL = "http://openweathermap.org/img/wn/" + iconer + "@2x.png";

            res.write("<h1>Weather is currently like: " + weatherDesc + "</h1>");
            res.write("<h1>Temperature is: " + temp + " degrees Celsius</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();

        })

    })




})




app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})

