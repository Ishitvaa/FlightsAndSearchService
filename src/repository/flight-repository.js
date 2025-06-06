const { Flights } = require('../models/index.js');

class FlightRepository {

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw { error };
        }
    }

}

module.exports = FlightRepository;