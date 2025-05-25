const express = require('express');
const ApiRoutes = require('./routes/index.js');

// import PORT 
const { PORT } = require('./config/serverConfig.js'); 

const { Airport, City } = require('./models/index.js');

const setUpAndStartServer = async () => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is listening on Port ${PORT}`);
        // console.log(process.env);
    });

    // include -> 
    const airport = await City.findAll({
        // where : {
        //     id : 11
        // },
        include : [{
            model : Airport
        }]
    })

    console.log(airport);

};

setUpAndStartServer();