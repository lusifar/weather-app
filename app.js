const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


geocode('Los Angels', (error, data) => {
    if(error) {
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forcaseData) => {
        if(error) {
            return console.log(error)
        }    
        console.log(forcaseData)
    })
})

