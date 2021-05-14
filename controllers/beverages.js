//import the connection 
const mongoose = require('../db/connection')

//create the db connection so we can close it in the function
const db = mongoose.connection

//import the model
const Beverage = require('../models/beverage')