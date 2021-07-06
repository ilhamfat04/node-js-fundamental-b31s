const express = require('express')

//Get routes to the variabel here

const app = express()

const port = 5000

app.use(express.json())

//Create endpoint grouping and router here

app.listen(port, () => console.log(`Listening on port ${port}!`))
