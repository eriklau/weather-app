import loadWeather from "./load-weather";
import getWeather from "./get-weather";

const searchBar = document.getElementById('search');
const inputBar = document.getElementById('input');


searchBar.addEventListener('click', async () => {
    if (inputBar.value === '') {
        return;
    }
    const data = await getWeather(inputBar.value);
    loadWeather(data);
});