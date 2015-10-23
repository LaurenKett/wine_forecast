// Foundation JavaScript
// Documentation can be found at: //http://foundation.zurb.com/docs
//$(document).foundation();

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var forecast_url= "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=Miami";
var app_id = "&appid=b51110191f3c733c3ec0ab97c64c8b28";
var units = "&units=imperial";
var temp;
var d = new Date();
var n = d.getMonth();
var location;

function setup() {
  // Request the data from openweathermap    
    

   
}

function weatherLookup(){
var url = base_url + city_url + app_id + units;
  loadJSON(url, gotWeather);
var url = forecast_url + city_url + app_id + units;
    loadJSON(url, gotForecast);
 
}

function draw() {
  
}

function gotWeather(weather) {
  //Position 0 is the first item in the list
  //each one is 3 hours apart
  temp = weather.main.temp;
    console.log(temp);
    $("#current-temp").html(parseInt(temp)+"&deg;");
    
    
    $(".current-outside").text(weather.weather[0].description);


if (weather.weather[0].description=="broken clouds") {
 $(".current-outside").text("Cloudy");                          
} 

}


function gotForecast() {

    var today = d.getDay();
    
    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    

    
    
    
    if (weather.weather[0].description == 801 ||802 ||803 ){
document.getElementById("weather.pic").innerHTML= 
        "<img src='img/partlycloudy.svg'>";
    }
        
   if (weather.weather[0].description == 804 ){
document.getElementById("weather.pic").innerHTML= 
        "<img src='img/cloudy.svg'>";
   }
       
    if (weather.weather[0].description == 800 ){
document.getElementById("weather.pic").innerHTML= 
        "<img src='img/sunny.svg'>";           
}
    
}
    
    
//take the five day forecast, pull hours at 3 hour intervals for bottom half of the app. Get the description to control the icons. 

//depending on the season, recommend different wines


//defining seasons


if (n <= 3|| n==12){
var season = Winter;
}

if (n >= 3|| n<=6){
season = Spring;
}

if (n >= 7|| n<=9){
 season = Summer;
}

if (n >= 10|| n<=11){
 season = Fall;
}








//match photos with wine pairings in a document, then pair them with a randomized function to call it