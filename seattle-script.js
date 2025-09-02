var seattleWeather = {
    "latitude": 47.621212,
    "longitude": -122.33495,
    "generationtime_ms": 0.091552734375,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 72.0,
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
        "temperature": 16.9,
        "windspeed": 5.0,
        "winddirection": 360,
        "is_day": 0,
        "weathercode": 3
    }
}
// Display Atlanta weather data
setText("temp", seattleWeather.current_weather.temperature);
setText("wind", seattleWeather.current_weather.windspeed);
setText("code", seattleWeather.current_weather.weathercode);