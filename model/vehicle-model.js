const mongoose=require('mongoose')

//schema
const VehicleSchema=new mongoose.Schema({
    numberPlate :{
        type:String
             
    },
    model:{
        type:String
    },
    color:{
        type:String
    },
    costPerKm:{
        type:String
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
    }

})

//model

const VehicleModel=mongoose.model('vehicle',VehicleSchema)

module.exports =VehicleModel