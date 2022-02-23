const mongoose=require('mongoose')

//schema
const bookingSchema=new mongoose.Schema({
    vehicle:{type:mongoose.SchemaTypes.ObjectId,ref:'vehicle'},
    rentCost:{type:mongoose.SchemaTypes.ObjectId,ref:'rentCost'},
    status:{type:String}

})

//model
const BookingModel=mongoose.model('booking',bookingSchema)

module.exports=BookingModel