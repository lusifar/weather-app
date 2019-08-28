const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0eca773f05ef02fc11cec266e3595016/${latitude},${longitude}`

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to the service!', undefined)
        } else if(response.body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, `It is currently ${ response.body.currently.temperature } degree out, There is a ${ response.body.currently.precipProbability }% chance of rain.`)
        }
    })
}

module.exports = forecast