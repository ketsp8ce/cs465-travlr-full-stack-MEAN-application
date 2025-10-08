const mongoose = require('mongoose');
const Trip = require('../../app_api/models/travlr'); // register model
const Model = mongoose.model('trips'); 
// GET: /trips - lists all the trips
// regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const tripslist = async (req, res) => {

        const q = await Model
        .find({}) // no filter, return all records
        .exec();

        console.log(q);

        if(!q)
        { // database returned no data
            return res
            .status(404) // 404 Not Found
            .json(err);
        } else { // return resulting trip list
            return res
            .status(200) 
            .json(q);
        }
        
    };


    module.exports =  {
        tripslist 

    };



