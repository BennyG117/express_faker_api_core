const userController = require('../controllers/user.controller');

module.exports = app => {

    app.get("/api", userController.hello);


    //! Should the following state: "app.post" instead of "app.get"?
    //api route for new user
    app.get("/api/users/new", userController.newFakeUser)



    //api route for new company
    app.get("/api/companies/new", userController.newFakeCompany)



    //api route for return both a new use and a new company
    app.get("/api/user/company", userController.newUserAndCo)




}
