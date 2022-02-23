const mongoose=require('mongoose')

const paymentSchema=new mongoose.Schema({
    vehicle:{type:mongoose.SchemaTypes.ObjectId,ref:"vehicle"},
    paymentDate:{type:Date},
    status:{type:String},
    bill:{type:mongoose.SchemaTypes.ObjectId,ref:"bill"},
    
})

const PaymentModel=mongoose.model("payment",paymentSchema)

module.exports=PaymentModel