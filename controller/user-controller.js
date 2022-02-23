const UserModel = require("../model/user-model");

function addUser(req, res) {
   
   let user=new UserModel({

    firstName:req.body.firstName,
    email:req.body.email,
    password:req.body.password,
    phoneNumber:req.body.phoneNumber,
    role:req.body.role
       
   })

  user.save((error, data) => {
    if (error) {
        
      res.json({
        msg: "Somthing went Wrong.....",
        status: -1,
        data:error,
      });
    } else {
      res.json({
        msg: "user added....",
        status: 200,
        data: data,
      });
    }
  });

}
function getAllUsers(req, res) {
    UserModel.find().populate('role').exec((error,data)=>{
        if (error) {
            res.json({
              msg: "Somthing went Wrong.....",
              status: -1,
              data: error
            });
          } else {
            res.json({
              msg: "This is list of All User....",
              status: 200,
              data: data,
            });
          }

    })
}
function deleteUser(req, res) {
    

    let userId=req.params.userId
    UserModel.deleteOne({"_id":userId},(error,data)=>{
        if (error) {
            res.json({
              msg: "Somthing went Wrong.....",
              status: -1,
              data: error
            });
          } else {
            res.json({
              msg: "user deleted....",
              status: 200,
              data: data
            });
          }
    })
}
function updateUser(req, res) {
    const user={
     firstName:req.body.firstName,
     email:req.body.email,
     password:req.body.password,
     phoneNumber:req.body.phoneNumber,
     role:req.body.role
    };
       UserModel.updateOne({'_id':req.params.userId},{$set:user},(error,data)=>{
        if (error) {
            res.json({
              msg: "Somthing went Wrong.....",
              status: -1,
              data: error
            });
          } else {
            res.json({
              msg: "This is list of All User....",
              status: 200,
              data: data,
            });
          }

       })

    

}

module.exports.addUser=addUser
module.exports.getAllUsers=getAllUsers
module.exports.deleteUser=deleteUser
module.exports.updateUser=updateUser
