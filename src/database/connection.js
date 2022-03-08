// Get Sequelize here ...
const Sequelize = require('sequelize')

// Create db variable here ...
const db = {}

// Create sequelize variable and get config as object here ...
// Customize your database config
const sequelize = new Sequelize("course-express-b31s", "root", null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
    freezeTableName: true,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

// Enter the database config to sequelize here ...
db.sequelize = sequelize

// Create exports module db here ...
module.exports = db
