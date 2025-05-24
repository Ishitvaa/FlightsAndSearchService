const express = require('express');
const ApiRoutes = require('./routes/index.js');

// import PORT 
const { PORT } = require('./config/serverConfig.js'); 

const setUpAndStartServer = async () => {

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is listening on Port ${PORT}`);
        // console.log(process.env);
    });

};

setUpAndStartServer();