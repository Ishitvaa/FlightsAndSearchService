// the repository is responsible for any kind of communication with any datasource( data fetching ) 
const { City } = require('../models/index.js');

class CityRepository{

    async createCity({ name }) {
        try {
            // await because we are communicating with our database
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw {error};
        }
    }

    async deleteCity( cityId ) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
            return true;
        } catch (error) { 
            console.log('Something went wrong in repository layer');
            throw {error};
        }
    }

    async getCity( cityId ) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id : cityId
                }
            });
            return city;
        } catch (error) {
            console.log('Something went wrong in repository layer');
            throw {error};
        }
    }
}

module.exports = CityRepository;
