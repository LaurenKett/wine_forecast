var base_url = "http://api.openweathermap.org/data/2.5/weather";
var forecast_url= "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=Miami";
var app_id = "&appid=b51110191f3c733c3ec0ab97c64c8b28";
var units = "&units=imperial";

var city;

function setup() {
  // Request the data from openweathermap    
     cityName = createInput();
    var searchButton = createButton('inputParent');
    cityName.parent('location-button');
    searchButton.mousePressed(addCityParameter);
}

function addCityParameter() {
    city = cityName.value();
    console.log(city);
    //document.getElementById("link").href = "app_page.html/?city=" + city;
}

//function weatherLookup(){
//    city_url= "?q=" + cityName.value();
//var url = base_url + city_url + app_id + units;
//  loadJSON(url, gotWeather);
//    console.log();
//var url = forecast_url + city_url + app_id + units;
//    loadJSON(url, gotForecast);
// 
//}

//function gotWeather(weather) {
//    console.log(weather);
//    temp = weather.main.temp;
//    console.log(temp);                         
//}