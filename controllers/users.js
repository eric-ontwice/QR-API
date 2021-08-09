// User Controller
// Get user model
const User = require('../models/User')

const user1 = new User(1, 'kevBr98', 'Kevin', 'Bryant', 'kev.bry95@gmail.com', 'testtest');
const user2 = new User(2, 'test', 'John', 'Doe', 'test@gmail.com', 'testtest');

const usersDatabase = [user1, user2];

function getUsers(request, response) {
    return response.send(usersDatabase)
}

function createUser(request, response) {
    const id = usersDatabase.length + 1
    console.log("request.body")
    console.log(request.body)
    const newUser = new User(
                            id, 
                            request.body.username, 
                            request.body.name, 
                            request.body.lastname, 
                            request.body.email, 
                            request.body.password
                        )
    usersDatabase.push(newUser)

    return response.status(201).send(newUser)
}

module.exports = {
    getUsers,
    createUser
}