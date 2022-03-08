const express = require('express')

const app = express()
const port = 5000

//allow this app to receive incoming json request
//Create app.use for express.json here
app.use(express.json())

// json.parse() = string -> js object
// json.stringfy() = js object -> string

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
app.get('/todos', (req, res) => {
    res.send({ data: todos })
})

//GET detail route: send the todo obj, by received id request params
// Create method GET by received id here
app.get('/todo/:id', (req, res) => {
    const { id } = req.params

    let data = todos.find((item) => item.id == id)

    if (!data) {
        return res.send({
            status: 'failed',
            message: 'Data not found'
        })
    }

    res.send({ data })

    // const index = id - 1
    // res.send(todos[index])
})

//POST route: receive json body request, from user input, then push to todos array
// Create method POST here
app.post('/todo', (req, res) => {
    const data = req.body
    todos.push(data)
    res.send(todos)
})

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
app.patch('/todo/:id', (req, res) => {
    const { id } = req.params
    todos = todos.map(item => {
        if (item.id == id) {
            return { ...req.body }
        } else {
            return item
        }
    })

    res.send({ data: todos })
})

//DELETE route: delete the todo obj, by received id request params
// Create method DELETE here
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params

    todos = todos.filter((item) => item.id != id)
    res.send({ data: todos })
})

app.listen(port, () => console.log(`Listening on port ${port}!`))