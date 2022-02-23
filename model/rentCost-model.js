const mongoose=require('mongoose')

//schema
const rentCostSchema=new mongoose.Schema({
    vehicle:{type:mongoose.SchemaTypes.ObjectId,ref:'vehicle'},
    
})

//model
const RentCostModel=mongoose.model('rentCost',rentCostSchema)

module.exports=RentCostModel