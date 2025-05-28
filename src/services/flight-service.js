const { FlightRepository, AirplaneRepository} = require('../repository/index.js');

// import fro utils that arrival time < departure time
const { compareTime } = require('../utils/timeConstraint.js');

class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data?.arrivalTime, data?.DepartureTime)) {
                throw { error : 'Arrival time cannot be less than departure time'};
            }

            // airplane db mai find kr liye taki usko capacity store kra sake
            const airplane = await this.airplaneRepository.getAirplane(data?.airplaneId);

            // ab flight mai pass kr dene create krne se phele
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats : airplane?.capacity
            });

            // return flight
            return flight;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw { error };
        }
    }
}

module.exports = FlightService

/* data -> kya aaye ga
{
    flightNumber,
    airplaneId,
    arrivalTime,
    deperatureTime,
    arrivalAirplaneId,
    deperatureAirplaneId,
    price,
    totalSeats -> fetch total seats from airplane
}

*/