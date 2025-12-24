import {useState} from "react";

export const CityInput = ({ onCitySubmit }) => {
    const [cityInput, setCityInput] = useState('');

    const handleInputSubmit = async (e) => {
        e.preventDefault();
        if (cityInput.trim()) {
            onCitySubmit(cityInput.trim())
            setCityInput('')
        }
    }

    return (
        <form className="row g-2 city-form" onSubmit={handleInputSubmit}>
            <div className="col-auto">
                <input
                    type="text"
                    className="form-control city-input rounded-4"
                    id="city-input"
                    placeholder="Введите город..."
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3 rounded-4">
                    Найти
                </button>
            </div>
        </form>
    )
}