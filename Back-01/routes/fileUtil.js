const fs = require('fs')
const md5 = require('md5');

const addUser = function (data) {

    const users = loadUser()
    
    const duplicateUsers = users.filter(function (user) {
        
        return user.email === data.email
    })


    if (duplicateUsers.length === 0) {
        
        users.push(data)
        saveUser(users)
        return{
            message:'User Added'
        }
    } else {
        
        return {
            message:'Duplicate Users'
        }
    }
}

const saveUser = function (user) {
    const dataJSON = JSON.stringify(user)
    fs.writeFileSync('userRegistration.json', dataJSON)
}

const loadUser = function () {
    try {
        const dataBuffer = fs.readFileSync('userRegistration.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addUser: addUser,
    loadUser:loadUser
}