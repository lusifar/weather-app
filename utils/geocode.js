const request = require('request')

geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?types=address&access_token=pk.eyJ1Ijoicmlja3ljaGFvIiwiYSI6ImNqenRuZDMydTAwZDQzbXFyb2tteDc5aXQifQ.1Qb0OMO1ZSibBBtecbf8yQ`

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connnect to the location service!', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find the location through the address!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode