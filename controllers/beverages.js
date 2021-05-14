//import the connection 
const mongoose = require('../db/connection')

//create the db connection so we can close it in the function
const db = mongoose.connection

//import the model
const Beverage = require('../models/beverage')

/////////////////////////////////////////////////////////////////////////////////////
//CRUD
//create               read           update                delete
//POST                 GET             PUT                  DELETE
//createMany          .find()     .findAndUpdate()     .findOneAndDelete()
/////////////////////////////////////////////////////////////////////////////////////

// finds all the beverages in the colleciton
function index() {
    Beverage.find( (error, beverages) => {
        console.log('this is beverages', beverages)
        db.close()
    })
}
index()

// function createNew() {
//     Beverage.create(myFirstBeverage, (error, beverage) => {
//         if (error) {
//             console.log(error)
//         }else {
//             console.log(beverage)
//         }
//         db.close()
//     })
// }
// createNew()



/////////////////// SHOWING (FINDING) A SINGLE BEVERAGE //////////
//this shows a single beverage
// function show(id) {
//     Beverage.findById(id, (error, beverage) => {
//         console.log(beverage)
//         db.close()
//     })
// }
// show("609dfba103fc9a490f030a89")
////////////////// METHOD 2 SHOW (FIND) A SINGLE BEVERAGE BY ID ////////////////////
// const show = async (id) => {
//     await Beverage.findById(id)
//     .then( (drink) => {
//         console.log(drink)
//         return drink
//     })
//     .catch( (error) => {
//         console.log(error)
//         throw error
//     })
//     db.close()
// }
// show("609dfba103fc9a490f030a89")

/////////////////// DELETING A SINGLE BEVERAGE //////////////////////////////

// function deleteBev() {
//     Beverage.findByIdAndDelete( {_id:'609dff27f04af64c3ab54411'}, (error, deleted) => {
//         console.log(error, deleted)
//         // return deleted
//         db.close()
//     })
// }
// deleteBev()



/////////////////// UPDATING A SINGLE BEVERAGE //////////////////////////////
// why can I only update one key at a time..? 

// function update() {
//     Beverage.findOneAndUpdate(
// //      are we finding this one↓
//         {brand: 'Poland Spring'},
//         // & changing this↓
//         {'contains-sugar': true}, 
//         // & changing this↓
//         {carbonated: true},
//         // {'beverage-type': 'stuff'},// this seems to be breaking right here when commented in why..?
//         // {container: 'bucket'},// this seems to be breaking right here when commented in why..?
//         // {new: true}, // this seems to be breaking right here when commented in why..?
//         (error, bev) => {           
//             console.log('this is the updated beverage', bev)
//             db.close()
//         }
//     )
// }
// update()

// ******** yea.. Im not seeing this version update any of values..? why? Its not throwing any errors.. just not updating
// function update() {
//     Beverage.findByIdAndUpdate(
//         {_id: "609dff27f04af64c3ab54412"}, 
//         {brand: 'Tuff Stuff'}, // this updates!
//         {'beverage-type': 'thing'}, // this DOES NOT update..!
//         // {carbonated: true}, // this seems to be breaking right here when commented in why..?
//         // {new: true},// this breaks it too.. 
//         function(error, beverage) {
//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log('this is the one to be updateded!', beverage);
//             }
//         }
//     )
// }
// update()