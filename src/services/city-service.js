const { CityRepository } = require('../repository/index.js');

class CityService {

    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            // check ki city delete hue ya nhi
            if (!response) {
                throw { error: 'city not found'};
            }
            return response;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            // check ki city mili ya nhi
            if (!city) {
                throw { error: 'City not found' };
            }
            return city;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw { error }; 
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            // check ki update hue ya nhi
            if (!city) {
                throw { error: 'City not found'};
            }
            return city;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw { error };
        }
    }
    
    async getAllCities(filter) {
        try {
            const cities = await this.cityRepository.getAllCities({ name : filter?.name});
            return cities;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw { error };
        }
    }
}

module.exports = CityService;