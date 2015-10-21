// Foundation JavaScript
// Documentation can be found at: //http://foundation.zurb.com/docs
//$(document).foundation();

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var city_url = "?q=Miami";
var app_id = "&appid=b51110191f3c733c3ec0ab97c64c8b28";
var units = "&units=imperial";
var temp;

function setup() {
    
    var canvas = createCanvas(200, 200);
    //canvas.parent('pickle');
  // Request the data from openweathermap
  var url = base_url + city_url + app_id + units;
  loadJSON(url, gotWeather);
}

function draw() {
  background(110);
  textSize(20);
  textAlign(CENTER, CENTER);
  
    if (temp) {
   text(temp,width/2,height/2);
  }
}

function gotWeather(weather) {
  //Position 0 is the first item in the list
  //each one is 3 hours apart
  temp = weather.main.temp;
    console.log(temp);
    $("#current-temp").text(temp);
}
