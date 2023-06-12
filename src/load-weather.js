function convertTime(time) {
    if (time[2] == ':') {
        let hour = parseInt(time.slice(0,2));
        if (hour > 12) {
            let newTime = (hour%12).toString()+time.slice(-3)+' PM';
            return newTime;
        } else {
            let noonTime = time+' PM'
            return noonTime
        }
    }
    else if (time[0] == '0') {
        let midnightTime = '12'+time.slice(-3)+' AM';
        return midnightTime;
    }
    else {
        let timeAM = time+' AM'
        return timeAM;
    }
}


function loadWeather(weatherObj) {
    const content = document.getElementById('content')
    const weatherBox = document.createElement('div');
    const nameCity = document.createElement('h1')
    const iconImg = document.createElement('img');
    const cityTime = document.createElement('p')
    const temperatureElement = document.createElement('p');
    const feelsLikeElement = document.createElement('p');
    const windElement = document.createElement('p');
    const precipitationElement = document.createElement('p');

    // Set class lists
    weatherBox.classList = 'weather-box';
    nameCity.classList = 'city-name';
    cityTime.classList = 'city-time';

    // Set content and attributes
    nameCity.textContent = `${weatherObj.cityName}`.toUpperCase(); 
    iconImg.src = `https:${weatherObj.weatherIcon}`;
    cityTime.textContent = `Time: ${convertTime(weatherObj.time)}`;
    temperatureElement.textContent = `Temperature: ${weatherObj.degreesCelsius}°C`;
    feelsLikeElement.textContent = `Feels like: ${weatherObj.degreesCelsiusFeelsLike}°C`;
    windElement.textContent = `Wind: ${weatherObj.windKph} km/h`;
    precipitationElement.textContent = `Precipitation: ${weatherObj.precipitation} mm`;

    // Append elements to the weather box
    weatherBox.appendChild(nameCity)
    weatherBox.appendChild(iconImg);
    weatherBox.appendChild(cityTime)
    weatherBox.appendChild(temperatureElement);
    weatherBox.appendChild(feelsLikeElement);
    weatherBox.appendChild(windElement);
    weatherBox.appendChild(precipitationElement);

    // Reference to existing weather box
    const weatherBoxExist = document.querySelector('.weather-box');

    // Replace existing weather box with new one
    if (weatherBoxExist) {
        weatherBoxExist.replaceWith(weatherBox);
    } else {
        // If the container doesn't exist, append the new container to the body
        content.appendChild(weatherBox);
    }    

}

export default loadWeather;