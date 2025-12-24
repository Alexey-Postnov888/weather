import {getTemperature} from "../data/hooks/getTemperature.js";
import {useEffect, useState} from "react";
import {getCoordinateByCity} from "../data/hooks/getCoordinateByCity.js";

export const CityInfo = ({ cityName }) => {
    const [temperature, setTemperature] = useState("Загрузка...")
    const [coordinates, setCoordinates] = useState(null)


    useEffect(() => {
        if (cityName.trim()) {
            getCoordinateByCity(cityName).then(coordinates => {
                setCoordinates(coordinates)
            }).catch(() => {
                setCoordinates(null)
                setTemperature("Неизвестно")
            })
        }
    }, [cityName])

    useEffect(() => {
        if (coordinates) {
            getTemperature(coordinates.lon, coordinates.lat).then(temperature => {
                setTemperature(`${temperature}°C`)
            }).catch(() => {
                setTemperature("Ошибка")
            })
        }
    }, [coordinates]);

    return (
        <div className="">
            <div className="p-4 bg-light rounded-4 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h3 className="mb-2">{cityName || "Введите город"}</h3>
                        <p className="text-secondary mb-0">Температура</p>
                    </div>
                    <div className="text-end ms-4">
                        <div className="temp fs-1 fw-bold text-primary">
                            {temperature}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}