// New York weather data POJO
var newyorkWeather = {
    "latitude": 40.710335,
    "longitude": -73.99309,
    "generationtime_ms": 0.0940561294555664,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 27.0,
    "current_weather_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature": "°C",
        "windspeed": "km/h",
        "winddirection": "°",
        "is_day": "",
        "weathercode": "wmo code"
    },
    "current_weather": {
        "time": "2025-09-02T03:15",
        "interval": 900,
        "temperature": 19.5,
        "windspeed": 6.6,
        "winddirection": 9,
        "is_day": 0,
        "weathercode": 2
    }
}

// Display Atlanta weather data
setText("temp", newyorkeather.current_weather.temperature);
setText("wind", newyorkWeather.current_weather.windspeed);
setText("code", newyorkWeather.current_weather.weathercode);