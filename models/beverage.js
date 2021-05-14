// import the connection
const mongoose = require('../db/connection')

//import the schema
const Schema = mongoose.Schema

const beverageSchema = new Schema({
        beverageName: String,
        brand: String,
        beverageType: String,
        containsSugar: true,
        carbonated: true,
        container: String,
},{timestamps: true})// I wanted to add a timestamp here.. even though its not needed. 

//create the model = collection + schema
//                              collection↓      schema↓
const Beverage = mongoose.model('Beverage', beverageSchema)


// export the schema
module.exports = Beverage