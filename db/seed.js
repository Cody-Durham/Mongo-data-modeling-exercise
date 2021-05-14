//import the seedData.json
const manyDrinks = require('../db/prompt1/beverage-data.json')

//import the db connection
const mongoose = require('connection') 

// import the model
const beverage = require('../models/beverage')

//open a db connection so we can CLOSE the connection in the function
const db = mongoose.connection 


//defining the first beverage
const firstBeverage = {
    beverageName: 'Coke', 
    brand: 'Cokea-Cola', 
    beverageType: 'Soda', 
    containsSugar: true, 
    carbonated: true, 
    container: 'bottle'
}
 