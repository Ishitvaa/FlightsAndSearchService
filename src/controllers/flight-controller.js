const { request } = require('express');
const { FlightService } = require('../services/index.js');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            message : 'Successfully created a flight',
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a flight',
            error : error
        });
    }
}

// const 

module.exports = {
    create,

}