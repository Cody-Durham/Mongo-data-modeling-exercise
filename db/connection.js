//import mongoose
const mongoose = require('mongoose')

//connect to the database URI
//                service:             port#      db name
const mongoURI = 'mongodb://localhost:27017/' + 'beverages'

//configure the params here
const config = {
    useUnifiedTopology:true, 
    useNewUrlParser: true, 
    useFindAndModify: false, 
}

//connecting to the URI that connects to mongo
mongoose.connect(mongoURI, config)

//connect to the db connection
const db = mongoose.connection

//additional connection messages for terminal / port use
db.on('error', (err) => console.log(err.message + 'is mongod not running'))
db.on('connected',() => console.log('mongo connected!', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))


// exporting mongoose
module.exports = mongoose