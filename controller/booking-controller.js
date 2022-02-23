const BookingModel=require('../model/booking-model')

module.exports.addBooking=(req,res)=>{

    let booking=new BookingModel({
        vehicle:req.body.vehicle,
        rentCost:req.body.rentCost,
        status:req.body.status
    })

    booking.save((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'added----',status:200,data:data})}

    })
}

module.exports.getAllBooking=(req,res)=>{

    BookingModel.find().populate('rentCost').exec((error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'all incurance ----',status:200,data:data})}
        

    })
}

module.exports.deleteBooking=(req,res)=>{

    BookingModel.deleteOne({_id:req.params.bookingId},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'deleted ----',status:200,data:data})}
                
    })
}

module.exports.updateBooking=(req,res)=>{
    let booking={
        vehicle:req.body.vehicle,
        rentCost:req.body.rentCost,
        status:req.body.status
    }
    BookingModel.updateOne({_id:req.params.bookingId},{$set:booking},(error,data)=>{
        if(error){
            res.json({msg:'error-----',status:-1,data:error})
        }else{res.json({msg:'updated ----',status:200,data:data})}
                

    })
}