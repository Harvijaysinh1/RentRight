const BillModel=require('../model/bill-model')

module.exports.addBill=(req,res)=>{

    let bill=new BillModel({
        booking:req.body.booking,
        billDate:req.body.billDate,
        totalAmount:req.body.totalAmount,

        
    })

    bill.save((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'added----',status:200,data:data})}

    })
}

module.exports.getAllBill=(req,res)=>{

    BillModel.find().populate('booking').exec((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'all bill ----',status:200,data:data})}
        

    })
}

module.exports.deleteBill=(req,res)=>{

    BillModel.deleteOne({_id:req.params.billId},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'deleted ----',status:200,data:data})}
                
    })
}

module.exports.updateBill=(req,res)=>{
    let bill={
        booking:req.body.booking,
        billDate:req.body.billDate,
        totalAmount:req.body.totalAmount,

    }
    BillModel.updateOne({_id:req.params.billId},{$set:bill},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'updated ----',status:200,data:data})}
                

    })
}