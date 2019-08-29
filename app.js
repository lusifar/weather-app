const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]
if(!address) {
    return console.log('Unable to get the address!')
}

geocode(address, (error, { latitude, longitude, location }) => {
    if(error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forcaseData) => {
        if(error) {
            return console.log(error)
        }    
        console.log(forcaseData)
    })
})

