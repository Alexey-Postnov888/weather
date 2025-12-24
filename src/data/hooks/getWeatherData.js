import axios from 'axios';

export const getWeatherData = async (lon, lat) => {
    const weatherResponse = await axios.get(
        'https://api.weather.yandex.ru/v2/forecast',
        {
            params: {
                lat: lat,
                lon: lon,
            },
            headers: {
                'X-Yandex-Weather-Key': import.meta.env.VITE_YANDEX_WEATHER_API_KEY,
            }
        }
    )

    const response = weatherResponse.data.fact

    return {
        temperature: response.temp,
        condition: response.condition,
        feelsLike: response.feels_like,
        humidity: response.humidity,
        windSpeed: response.wind_speed,
        pressure: response.pressure_mm
    }
}