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
    {
        id: 3,
        title: "Gunakan masker",
        idDone: true
    }
]

// Create controller get Todos here
exports.getTodos = async (req, res) => {
    try {
        res.send({
            status: 'success',
            data: {
                todos
            }
        })

    } catch (error) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

// Create controller get Todo by received id here

// Create controller add Todo here

// Create controller update Todo here

// Create controller delete Todo here