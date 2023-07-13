const { faker } = require('@faker-js/faker');


// module.exports = [
//     //! test example?
//     [

//         {password: "12345678", email: "test1@email.com", userNumber: "555-555-5555", firstName: "one", lastName: "last", id: "falkjbfd"},
//         {password: "abcdefgh", email: "checking2@gmail.com", userNumber: "777-777-7777", firstName: "checking", lastName: "two", id: "lafsk;lkfnd"},
//         {password: "somethinggood", email: "totallyReal@email.com", userNumber: "111-111-1111", firstName: "totally", lastName: "real", id: "15642345612"},

//     ];

// ! MOVED to user.Model.js: create a new fake user
const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        userNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        id: faker.string.uuid(),
    }
    return newFakeUser;
};
//shows the results in terminal
const newFakeUser = createUser();
console.log(newFakeUser);

// ! MOVED to user.Model.js: create a company
const createCompany = () => {
    const newFakeCompany = {
        companyId: faker.string.uuid(),
        companyName: faker.company.name(),
        companyStreetAddress: faker.location.streetAddress(),
        companyStreet: faker.location.street(),
        companyCity: faker.location.city(),
        companyState: faker.location.state(),
        companyZip: faker.location.zipCode(),
        companyCountry: faker.location.country()
    }
    return newFakeCompany;
};

//shows the results in terminal
const newFakeCompany = createCompany();
console.log(newFakeCompany);



// ! MOVED to user.Model.js: create a new user & a new company together:
const createUserAndCo = () => {
    const newUserAndCo = {
        newFakeUser,
        newFakeCompany
    }
    return newUserAndCo;
}
//shows the results in terminal
const newUserAndCo = createUserAndCo();
console.log(newUserAndCo);

//! Exporting as an array return results targeting the index -> see controller* 
module.exports = [newFakeUser, newFakeCompany, newUserAndCo]
