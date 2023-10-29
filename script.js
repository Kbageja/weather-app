const  cloud_pct = document.getElementById("cloud_pct");
const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "478cc96857msh621090b32310942p17733ajsn637f71b0959f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const myfunc  = (city) =>{ 

	city_name.innerHTML =  city

   fetch(url+ city, options).then( response  => response.json()).then((response)=>{
  console.log(response);
 
  temp.innerHTML = response.temp
  
  humidity.innerHTML = response.humidity
  
  wind_speed.innerHTML = response.wind_speed
  
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML = response.sunset
}).catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	myfunc(cityname.value)
})
myfunc("Delhi")