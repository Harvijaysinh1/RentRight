const mongoose=require('mongoose')

//schema
const insuranceSchema=new mongoose.Schema({
    vehicle:{type:mongoose.SchemaTypes.ObjectId,ref:'vehicle'},
    bankDetail:{type:String},
    availability:{type:Number}

})

const InsuranceModel=mongoose.model('insurance',insuranceSchema)

module.exports=InsuranceModel