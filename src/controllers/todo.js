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
exports.getTodo = async (req, res) => {
    try {
        const id = req.params.id;

        let todo = todos.find(todo => todo.id == id)
        res.send({
            status: "success",
            data: {
                todo
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

// Create controller add Todo here
exports.addTodo = async (req, res) => {
    try {
        todos.push(req.body)
        res.send({
            status: "success",
            data: {
                todos,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

// Create controller update Todo here
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        todos = todos.map((todo) => {
            if (todo.id == id) {
                return req.body
            } else {
                return todo
            }
        })

        res.send({
            status: "success",
            data: {
                todos
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

// Create controller delete Todo here
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        todos = todos.filter((todo) => todo.id != id);
        res.send({
            status: "success",
            data: {
                todos,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};