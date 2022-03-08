// Create db variable and get database connection here ...
// Get QueryTypes from sequelize
const db = require('../database/connection')

// Create controller add User here ...
exports.addUser = async (req, res) => {
    try {
        const { email, password, name, status } = req.body

        const query = `INSERT INTO users (email, password, name, status)
                        VALUES ('${email}','${password}','${name}','${status}')`

        await db.sequelize.query(query)

        res.send({
            status: 'success',
            message: 'add user finished'
        })
    } catch (error) {
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

