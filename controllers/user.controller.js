const users = require('../models/user.model')
// const newFakeUser = require('../server/server.js')



module.exports ={

    hello : (req, res)=> {
        res.json({message: "Hello World"});
    },

    newFakeUser: (req, res) => {
        console.log(users);
        res.json(users[0])

    }, 

    newFakeCompany: (req, res) => {
        res.json(users[1])
    },

    newUserAndCo: (req, res) => {
        res.json(users[2])
    }

}