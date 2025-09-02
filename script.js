var alberquerque = {
  latitude: 34.994064,
  longitude: -105.99934,
  generationtime_ms: 0.164031982421875,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 1882.0,
  current_weather_units: {
    time: "iso8601",
    interval: "seconds",
    temperature: "°C",
    windspeed: "km/h",
    winddirection: "°",
    is_day: "",
    weathercode: "wmo code",
  },
  current_weather: {
    time: "2025-08-29T02:00",
    interval: 900,
    temperature: 25.1,
    windspeed: 5.4,
    winddirection: 110,
    is_day: 0,
    weathercode: 1,
  },
};

// Display weather data
setText("temp", alberquerqueWeather.current_weather.temperature);
setText("wind", alberquerqueWeather.current_weather.windspeed);
setText("code", alberquerqueWeather.current_weather.weathercode);