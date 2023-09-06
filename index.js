const express=require('express');
require("dotenv").config()
const app = express();
const https=require('https');
const request = require('request');


const API_KEY=process.env.API_KEY;
const city="Dandeli"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;


app.get('/',(req,res)=>{
  // var jsonfile = getWeather("Belgaum")
  // console.log(weatherdata);
  https.get(url,response=>{
    response.on("data",(data)=>{
      const weatherdata=JSON.parse(data)
      // console.log(weatherdata.weather)
      res.send(weatherdata);
    })
    
    // console.log(weatherdata.weather)
    // res.send(weatherdata.weather[0].description);
  })
  
})
app.listen(3000,()=>{
    console.log("Server Started at port 3000");
})