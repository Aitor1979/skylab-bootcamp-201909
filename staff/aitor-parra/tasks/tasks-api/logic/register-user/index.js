const validate = require('../../utils/validate')
const users = require('../../data/users.json')
const fs = require('fs')
const path = require('path')

module.exports = function(name, surname, email, username, password) {
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.string(surname)
    validate.string.notVoid('surname', surname)
    validate.string(email)
    validate.string.notVoid('e-mail', email)
    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)

    return new Promise((resolve, reject) => {
        
        const memUser = users.find(user => users.username === username)
        
        memUser ? new Error(error) : tomemory
        
        const tomemory = users.push({ name, surname, email, username, password }) //añade lso datos de usuario en memoria
        
        const write = fs.writeFile(path.join(__dirname, '../../data/users.json'), JSON.stringify(users), error => error? reject(error) : resolve()) //  converts a JavaScript object or value to a JSON string //lo graba en disco 
        // logic rules!!!!
        // const json = fs.readFile(path.join(__dirname, '../../data/users.json'))
        // const disk = JASON.parse(json)
    })
}