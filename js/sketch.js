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
var cityName;


function setup() {
  // Request the data from openweathermap    
 weatherLookup();   
}

function weatherLookup(){
    cityName = GetURLParameter(city_url);
    city_url= "?q=" + cityName; 
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
    console.log(weather);
    
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
    
var season = getSeason(d.getMonth());

var d1 = new Date();
var today = d1.getDay(); 
    
console.log(weekday[today]); 

var d2 = new Date(d1.getTime() + 1 * 24 * 60 * 60 * 1000);
var tomorrow = d2.getDay();
$("#day1").html(weekday[tomorrow]);
    console.log(weekday[tomorrow]);

var d3 = new Date(d2.getTime() + 1 * 24 * 60 * 60 * 1000);
var thirdDay = d3.getDay();
$("#day2").html(weekday[thirdDay]);
console.log(weekday[thirdDay]);

    
var d4 = new Date(d3.getTime() + 1 * 24 * 60 * 60 * 1000);
var fourthDay = d4.getDay();
$("#day3").html(weekday[fourthDay]);
console.log(weekday[fourthDay]);
    
var d5 = new Date(d4.getTime() + 1 * 24 * 60 * 60 * 1000);
var fifthDay = d5.getDay();
$("#day4").html(weekday[fifthDay]);
console.log(weekday[fifthDay]);
    
var d6 = new Date(d5.getTime() + 1 * 24 * 60 * 60 * 1000);
var sixthDay = d6.getDay();
$("#day5").html(weekday[sixthDay]);
console.log(weekday[sixthDay]);


var j = new Date();
var nextDay;
var day;

today = j.getDay();
console.log(weekday[today]);

// i is the number of days we're adding, so we start at 1
for (var i = 1; i <= 5; i++) {
	nextDay = new Date(j.getTime() + i * 24 * 60 * 60 * 1000);
	var day = nextDay.getDay();
	console.log(weekday[day]);
};  
    
    if (gotWeather.weather[0].description == 801 ||gotWeather.weather[0].description == 802 ||gotWeather.weather[0].description == 803 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/partlycloudy.svg'>";
    }
        
   if (gotForecast.weather[0].description == 804 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/cloudy.svg'>";
   }
       
    if (gotForecast.weather[0].description == 800 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/sunny.svg'>";           
}
    
    if (gotForecast.weather[0].description == 500 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/raining.svg'>";
    }
    if (gotForecast.weather[0].description == 501 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/raining.svg'>";
    }
    if (gotForecast.weather[0].description == 502 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/raining.svg'>";
    }
    if (gotForecast.weather[0].description == 503 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/raining.svg'>";
    }
    if (gotForecast.weather[0].description == 504 ){
document.getElementById("weather-pic").innerHTML= 
        "<img src='img/raining.svg'>";
    }
}
    
//defining seasons
function getSeason(month) {
    switch(month) {
        case 11:
        case 0:
        case 1:
            return 'winter';
        break;
        case 2:
        case 3:
        case 4:
            return 'spring';
        break;
        case 5:
        case 6:
        case 7:
            return 'summer';
        break;
        case 8:
        case 9: 
        case 10:
            return 'fall';
        break;
    }
        
        
    //depending on the season, recommend different wines
    if ('fall' == getSeason) {
    document.getElementById(".wine-description").innerHTML="It might be fall, but this heat begs for a cold and crisp wine. Pair a Prosecco from the veneto region with Linguini with clams and fennel."; 
    }
    
    if ('winter' == getSeason) {
    $(".wine-description").text("Embrace winter and enjoy a flavorul Syrah by the fire. It's notes of cured meats, smoke, coffee, blueberry and iron oxide go perfectly with flavorful food like lamb or shitake mushrooms with thyme if you're a vegetarian.");
    }
    
    if ('spring' == getSeason) {
    $(".wine-description").text("Enjoy the short asparagus season this spring by encorporating this vegetable int oa risotto. Pair it with a zesty and crisp Sauvignon Blanc.");
    }
    
    if ('summer' == getSeason) {
    $(".wine-description").text("Pair a dry Rosé with a tomato caprese salad with watermelon late this afternoon as the sun sets.");
    }
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}