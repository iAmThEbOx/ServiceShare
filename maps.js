const axios = require('axios').default;

exports.addressToLatLng = async function (address) {
    let res = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: 'AIzaSyA3mPv3TdBjVZgkCI3jVQPP_9E5_YdDn8s',
            }
        }
    );
    return res.data.results[0].geometry.location;
}

exports.latLngToAddress = async function ({lat, lng}) {
    let res = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                latlng: `${lat},${lng}`,
                key: 'AIzaSyA3mPv3TdBjVZgkCI3jVQPP_9E5_YdDn8s',
            }
        }
    );
    return res.data.results[0].formatted_address;
}

exports.distanceLatLng = async function ({lat1, lng1, lat2, lng2}) {
    let res = await axios.get(
        'https://maps.googleapis.com/maps/api/distancematrix/json', {
            params: {
                origins: `${lat1},${lng1}`,
                destinations: `${lat2},${lng2}`,
                key: 'AIzaSyA3mPv3TdBjVZgkCI3jVQPP_9E5_YdDn8s',
                units: 'imperial'
            }
        }
    );
    return res.data.rows[0].elements[0].distance.text
}
