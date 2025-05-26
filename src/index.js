const express = require('express');
const ApiRoutes = require('./routes/index.js');

// import PORT 
const { PORT } = require('./config/serverConfig.js'); 

const sequelize = require('sequelize');

const { Airport, City , Airplane} = require('./models/index.js');
const db = require('./models/index.js');

const setUpAndStartServer = async () => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server is listening on Port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter : true});
        }

        // include -> to associate with other models
        // const airport = await City.findAll({
        //     // where : {
        //     //     id : 11
        //     // },
        //     include : [{
        //         model : Airport
        //     }]
        // })

        // select city of particular cityId:
        // const city = await City.findOne({
        //     where : {
        //         id : 11
        //     }
        // });
        // // can get all airports of the cities:
        // const airports = await city.getAirports();

        // to add airport manually to a particular city using cityId:
        // await city.addAirports({
            
        // })

        // console.log(city, airports);

        // await Airplane.create({
        //     modelNumber: 'Bombardier CRJ'
        // })
    });

};

setUpAndStartServer();