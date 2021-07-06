const express = require('express')

const app = express()
const port = 5000

//allow this app to receive incoming json request
//Create app.use for express.json here

let todos = [
    {
        id: 1,
        title: "Cuci tangan",
        isDone: true
    },
    {
        id: 2,
        title: "Jaga jarak",
        isDone: false
    },
]

//GET list route: simply send arr of obj todos on your user screen
// Create method GET here

//GET detail route: send the todo obj, by received id request params
// Create method GET by received id here

//POST route: receive json body request, from user input, then push to todos array
// Create method POST here

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
// Create method PATCH here

//DELETE route: delete the todo obj, by received id request params
// Create method DELETE here

app.listen(port, () => console.log(`Listening on port ${port}!`))