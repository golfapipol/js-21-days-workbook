(() => {
    const key = '0c1e07b9-a078-4189-9edd-1da9415825e3'
    
    const getAirQuality = async ({city, state, country}) => {
        const response = await fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${key}`)
        const { data: {current}} = await response.json()
        
        const { pollution, weather } = current
        return {
            aqi: pollution.aqius,
            temperature: weather.tp,
            humidity: weather.hu,
            wind: weather.ws,
        }
    }

    const displayAirQuality = ({city, state, country, aqi, temperature, humidity, wind}) => {
        const cityElement = document.querySelector('.city')
        const stateCountryElement = document.querySelector('.state-country')
        const aqiElement = document.querySelector('.aqi > h1')
        const temperatureElement = document.querySelector('.temperature')
        const humidityElement = document.querySelector('.humidity')
        const windElement = document.querySelector('.wind')
        cityElement.innerText = city
        stateCountryElement.innerText = `${state}, ${country}`
        aqiElement.innerText = aqi
        temperatureElement.innerText = `Temp: ${temperature}`
        humidityElement.innerText = `Humidity: ${humidity}%`
        windElement.innerText = `Wind: ${wind} m/s`
    }

    const setAirQualityColor = (aqi) => {
        if (aqi <= 50) {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--good-aqi-color)'
            )
        } else if (aqi <= 100) {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--medium-aqi-color)'
            )
        } else {
            document.documentElement.style.setProperty(
                '--current-aqi-color',
                'var(--bad-aqi-color)'
            )
        }
    }

    const run = async () => {
        const city = 'wang thonglang'
        const state = 'Bangkok'
        const country = 'Thailand'

        const { aqi, temperature, humidity, wind } = await getAirQuality({city,state,country})
        displayAirQuality({city, state, country, aqi, temperature, humidity, wind})
        setAirQualityColor(aqi)
    }

    run()
})()