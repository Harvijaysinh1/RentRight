const mongoose=require('mongoose')

//schema
const billSchema=new mongoose.Schema({
    booking:{type:mongoose.SchemaTypes.ObjectId,ref:'booking'},
    billDate:{type:Date},
    totalAmount:{type:Number}

})

const BillModel=mongoose.model('bill',billSchema)

module.exports=BillModel