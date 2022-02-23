const VehicleModel = require('../model/vehicle-model')

function addVehicle(req, res) {

    const vehicle = new VehicleModel({
        numberPlate: req.body.numberPlate,
        model: req.body.model,
        color: req.body.color,
        costPerKm: req.body.costPerKm,
        user: req.body.user
    })

    vehicle.save((error, data)=>{
        if (error) {
            res.json({
                msg: 'Error----------',
                status: -1,
                data: error
            })
        }else{
            res.json({
                msg:'added----',
                status:200,
                data:data
            })
        }
    })

}

function getAllVehicle(req,res){
    

    VehicleModel.find().populate('user','firstName').exec((error,data)=>{
        if(error){
            res.json({
                msg:'erroe-------',
                status:-1,
                data:error
            })
        }else{
            res.json({
                msg:'all vehicle are------',
                status:200,
                data:data
            })
        }

    })
}

function deleteVehicle(req,res){
    

    VehicleModel.deleteOne({'_id':req.params.vehicleId},(error,data)=>{
        if(error){
            res.json({
                msg:'error------',
                status:-1,
                data:error
            })
        }else{
            res.json({
                msg:'deleted',
                status:200,
                data:data
            })
        }

    })
}

function updateVehicle(req,res){

    let vehicle={
        numberPlate:req.body.numberPlate,
        model:req.body.model,
        color:req.body.color,
        costPerKm:req.body.costPerKm,
        user:req.body.user


    }
    VehicleModel.updateOne({'_id':req.params.vehicleId},{$set:vehicle},(error,data)=>{
        if(error){
            res.json({
                msg:'error----',
                status:-1,
                data:error
            })
        }else{
            res.json({
                msg:'updated-----',
                status:200,
                data:data
            })
        }
    })
}

module.exports.addVehicle=addVehicle
module.exports.getAllVehicle=getAllVehicle
module.exports.deleteVehicle=deleteVehicle
module.exports.updateVehicle=updateVehicle