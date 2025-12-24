import axios from 'axios';

export const getTemperature = async (lon, lat) => {
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

    return weatherResponse.data.fact.temp
}