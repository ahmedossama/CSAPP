const mongoose = require('mongoose');

const databaseConfig = require('../defines/database-config')
const logger = require('../utils/utils').logger



const connectToDB = () =>{
    mongoose.connect(databaseConfig.databaseUrl).then(null,
    err=>{
        logger(err)
    })
}


module.exports = {
    connectToDB: connectToDB
}