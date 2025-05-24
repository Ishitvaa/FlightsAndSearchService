const { CityService } = require('../services/index.js');

const cityService = new CityService();

const create = async(req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            status : true,
            message : 'Successfully created a city',
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            status : false,
            message : 'Not able to create city',
            error : error
        });
    }
}

// GET -> /city/:id
const get = async(req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data : city,
            status: true,
            message : 'successfully fetched city',
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            status : false,
            message : 'Not able to fetch city',
            error : error
        });
    }
}

// Patch -> /city/:id -> data(req.body)
const update= async(req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data : city,
            status : true,
            message : 'Successfully updated city',
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            status : false,
            message : 'Not able to update city',
            error : error
        });
    }
}

// delete -> /city/:id
const destroy = async(req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            status : true,
            message : 'Successfully deleted a city',
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            status : false,
            message : 'Not able to update city',
            error : error
        });
    }
}

// to get all cities
const getAll = async(req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : cities,
            status : true,
            message : 'Successfully fetched all cities',
            error : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            status : false,
            message : 'Not able to fetch all cities',
            error : error
        })
    }
}

module.exports = {
    create,
    get,
    destroy,
    update,
    getAll
}

// work flow : controller -> service -> repository 
// service and repository apna kaam kr ke controller ko response bhejenge
// then controller us response ko format kr ke return kr dega