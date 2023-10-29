const  cloud_pct = document.getElementById("cloud_pct");
const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "478cc96857msh621090b32310942p17733ajsn637f71b0959f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


   fetch(url, options).then( response  => response.json()).then((response)=>{
  console.log(response);
  cloud_pct.innerHtml = response.cloud_pct
  temp.innerHtml = response.temp
  feels_like.innerHtml = response.feels_like
  humidity.innerHtml = response.humidity
  min_temp.innerHtml = response.min_temp
  max_temp.innerHtml = response.max_temp
  wind_speed.innerHtml = response.wind_speed
  wind_degrees.innerHtml = response.wind_degrees
  sunrise.innerHtml = response.sunrise
  sunset.innerHtml = response.sunset
}).catch(err => console.error(err));

