import axios from "axios";

export const getCoordinateByCity = async (cityName) => {
    const response = await axios.get(
        'https://geocode-maps.yandex.ru/v1',
        {
            params: {
                apikey: import.meta.env.VITE_YANDEX_GEOCODER_API_KEY,
                geocode: cityName,
                format: "json",
            }
        });

    const [lon, lat] = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(Number)

    return {
        lon: lon,
        lat: lat
    }
}