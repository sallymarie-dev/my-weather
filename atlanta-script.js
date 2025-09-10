// Atlanta weather data POJO
var atlantaWeather = {
  latitude: 33.75,
  longitude: -84.39,
  current_weather: {
    temperature: 28.5,
    windspeed: 6.2,
    weathercode: 0,
  },
};

// Display Atlanta weather data
console.log(atlantaWeather.current_weather.temperature);
console.log(atlantaWeather.current_weather.windspeed);
console.log(atlantaWeather.current_weather.weathercode);
setText("atlantatemp", atlantaWeather.current_weather.temperature);
setText("atlantawind", atlantaWeather.current_weather.windspeed);
setText("atlantacode", atlantaWeather.current_weather.weathercode);
