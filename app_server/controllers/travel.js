const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
method: 'GET',
headers: {
        'Accept': 'application/json'
    },
};

// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('app_api/data/trips.json', 'utf8'));

const travel = async function (req, res, next) {
    // console.log('TRAVEL: CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            res.render('travel', { title: 'Travlr Gateways', trips: json, message});
        })
    catch((err) -> res.status(500).send(err.message));
};

module.exports = {
travel
}