const InsuranceModel=require('../model/insurance-model')

module.exports.addInsurance=(req,res)=>{

    let insurance=new InsuranceModel({
        vehicle:req.body.vehicle,
        bankDetail:req.body.bankDetail,
        availability:req.body.availability
    })

    insurance.save((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'added----',status:200,data:data})}

    })
}

module.exports.getAllInsurance=(req,res)=>{

    InsuranceModel.find().populate('vehicle','model').exec((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'all incurance ----',status:200,data:data})}
        

    })
}

module.exports.deleteIncurance=(req,res)=>{

    InsuranceModel.deleteOne({_id:req.params.insuranceId},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'deleted ----',status:200,data:data})}
                
    })
}

module.exports.updateInsurance=(req,res)=>{
    let insurance={
        vehicle:req.body.vehicle,
        bankDetail:req.body.bankDetail,
        availability:req.body.availability

    }
    InsuranceModel.updateOne({_id:req.params.insuranceId},{$set:insurance},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'updated ----',status:200,data:data})}
                

    })
}