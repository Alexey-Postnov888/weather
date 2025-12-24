import {Root} from "./components/Root.jsx";
import {CityInfo} from "./components/CityInfo.jsx";
import {CityInput} from "./components/CityInput.jsx";
import {useEffect, useState} from "react";
import {addCityInputValueToLocalStorage, getCityInputValueFromLocalStorage} from "./data/services/LocalStorage.js";


function App() {
    const [cityName, setCityName] = useState('');

    useEffect(() => {
        getCityInputValueFromLocalStorage().then(cityName => {
            if (cityName) {
                setCityName(cityName)
            } else {
                setCityName("Челябинск")
            }
        }).catch(() => {
            setCityName("Челябинск")
        });
    }, []);

    const handleCityChange = (newCityName) => {
        if (newCityName.trim()) {
            setCityName(newCityName);
            addCityInputValueToLocalStorage(newCityName.trim())
        }
    }

    return (
        <Root>
            <CityInput onCitySubmit={handleCityChange} />
            <CityInfo cityName={cityName} />
        </Root>
    );
}

export default App
