const PaymentModel=require('../model/payment-model')

module.exports.addPayment=(req,res)=>{
    const payment=new PaymentModel({
        vehicle:req.body.vehicle,
        paymentDate:req.body.paymentDate,
        status:req.body.status,
        bill:req.body.bill
    })

    payment.save((error,data)=>{
        if(error){
            res.json({msg:'error------',status:-1,data:error})
        }else{res.json({msg:'payment added',status:200,data:data})}
    })
}

module.exports.getAllPayment=(req,res)=>{

    PaymentModel.find().populate('vehicle','costPerKm').exec((error,data)=>{
    if(error){    
    res.json({msg:'error------',status:-1,data:error})
    }else{res.json({msg:'here is all payment',status:200,data:data})}
        
    })
}

module.exports.deletePayment=(req,res)=>{
    PaymentModel.deleteOne({_id:req.params.paymentId},(error,data)=>{
        if(error){    
            res.json({msg:'error------',status:-1,data:error})
            }else{res.json({msg:'deleted',status:200,data:data})}
                

    })
}

module.exports.updatePayment=(req,res)=>{
    let payment={
        vehicle:req.body.vehicle,
        paymentDate:req.body.paymentDate,
        status:req.body.status,
        bill:req.body.bill

    }
    PaymentModel.updateOne({_id:req.params.paymentId},{$set:payment},(error)=>{
        if(error){    
            res.json({msg:'error------',status:-1,data:error})
            }else{res.json({msg:'updated ----',status:200,data:data})}

    })
}