const express = require('express')
const app = express()
const port = 8000

// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const routeAttacher = require('./routes/user.route')


routeAttacher(app)

app.listen( port, () => console.log(`<<Server Online>> ${port}`) );







