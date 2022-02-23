const RentCostModel=require('../model/rentCost-model')

module.exports.addRentCost=(req,res)=>{

    let rentCost=new RentCostModel({
        vehicle:req.body.vehicle,
        
    })

    rentCost.save((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'added----',status:200,data:data})}

    })
}

module.exports.getAllRentCost=(req,res)=>{

    RentCostModel.find().populate('vehicle').exec((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'all rentCost ----',status:200,data:data})}
        

    })
}

module.exports.deleteRentCost=(req,res)=>{

    RentCostModel.deleteOne({_id:req.params.rentCostId},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'deleted ----',status:200,data:data})}
                
    })
}

module.exports.updateRentCost=(req,res)=>{
    let rentCost={
        vehicle:req.body.vehicle,
        
    }
    RentCostModel.updateOne({_id:req.params.rentCostId},{$set:rentCost},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'updated ----',status:200,data:data})}
                

    })
}