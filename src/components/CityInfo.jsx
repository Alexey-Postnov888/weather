import {getWeatherData} from "../data/hooks/getWeatherData.js";
import {useEffect, useState} from "react";
import {getCoordinateByCity} from "../data/hooks/getCoordinateByCity.js";

export const CityInfo = ({ cityName }) => {
    const [weatherData, setWeatherData] = useState(null)
    const [coordinates, setCoordinates] = useState(null)


    useEffect(() => {
        if (cityName.trim()) {
            getCoordinateByCity(cityName).then(coordinates => {
                setCoordinates(coordinates)
            }).catch(() => {
                setCoordinates(null)
                setWeatherData(null)
            })
        }
    }, [cityName])

    useEffect(() => {
        if (coordinates) {
            getWeatherData(coordinates.lon, coordinates.lat).then(data => {
                setWeatherData(data)
            }).catch(() => {
                setWeatherData(null)
            })
        }
    }, [coordinates]);

    return (
        <div className="mt-1 p-4 bg-white rounded-4 shadow">
            <div className="text-center mb-4">
                <h1 className="text-primary mb-2">{cityName}</h1>
            </div>

            {weatherData && (
                <div className="text-center mb-4">
                    <div className="display-1 fw-bold text-primary">
                        {weatherData ? `${weatherData.temperature}°C` : "—"}
                    </div>
                    <div className="text-muted">
                        Ощущается как: {weatherData.feelsLike}°
                    </div>
                </div>
            )}

            {weatherData && (
                <div className="text-center mb-4">
                    <div className="badge bg-light text-dark fs-6 px-3 py-2 rounded-pill">
                        {weatherData.condition}
                    </div>
                </div>
            )}

            {weatherData && (
                <div className="row gx-4 mt-4 pt-3 border-top">
                    <div className="col text-center">
                        <div className="text-muted small mb-1">Ветер:</div>
                        <div className="fw-bold">{weatherData.windSpeed} м/с</div>
                    </div>
                    <div className="col text-center">
                        <div className="text-muted small mb-1">Влажность:</div>
                        <div className="fw-bold">{weatherData.humidity}%</div>
                    </div>
                    <div className="col text-center">
                        <div className="text-muted small mb-1">Давление:</div>
                        <div className="fw-bold">{weatherData.pressure} мм</div>
                    </div>
                </div>
            )}

            {!weatherData && cityName && (
                <div className="text-center py-3">
                    <div className="spinner-border spinner-border-sm text-primary me-2" role="status"></div>
                    <span className="text-muted">Загрузка погоды...</span>
                </div>
            )}
        </div>
    );
}