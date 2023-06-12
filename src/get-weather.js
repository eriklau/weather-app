async function getWeather(cityName) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9c332234d3ad4afab61151358231105&q=${cityName}`, {mode: 'cors'});

    try {
        if (!response.ok) {
            throw new Error(`City not found`);
        }
        const weatherData = await response.json();
        const time = weatherData.location.localtime.slice(-5).trim();
    
        const weatherIcon = weatherData.current.condition.icon;
        const degreesCelsius = weatherData.current.temp_c;
        const degreesCelsiusFeelsLike = weatherData.current.feelslike_c;
        const windKph = weatherData.current.wind_kph;
        const precipitation = weatherData.current.precip_mm;
        return { cityName:cityName, time:time, weatherIcon:weatherIcon, degreesCelsius:degreesCelsius, degreesCelsiusFeelsLike:degreesCelsiusFeelsLike, windKph:windKph, precipitation:precipitation };
        
    } catch(error) {
        alert(error);
        return null;
    }

}

export default getWeather;