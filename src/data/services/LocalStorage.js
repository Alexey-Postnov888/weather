const CITY_INPUT_VALUE = 'CITY_INPUT_VALUE_KEY';

export const addCityInputValueToLocalStorage = (input) => {
    return new Promise((resolve) => {
        localStorage.setItem(CITY_INPUT_VALUE, JSON.stringify(input));
        resolve();
    });
}

export const getCityInputValueFromLocalStorage = () => {
    return new Promise((resolve) => {
        const defaultCityInput = "";
        const rawInput = localStorage.getItem(CITY_INPUT_VALUE);

        if (!rawInput) {
            resolve(defaultCityInput);
            return;
        }

        const inputValue = JSON.parse(rawInput);

        resolve(inputValue)
    });
}