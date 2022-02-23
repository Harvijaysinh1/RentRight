
const express=require('express');
const mongoose=require('mongoose');
const sessionController=require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController=require("./controller/user-controller")
const vehicleController=require("./controller/vehicle-controller")


const port=3000;
const app= express()


app.use(express.json())  //mobile-----accept json data and setinto body             --->globle middlewar
app.use(express.urlencoded({extended:true})) //web---accept url data and set into body


//database connection

//connection and it also create new database if not exist
mongoose.connect('mongodb://localhost:27017/rentright1',(error)=>{
    if(error){
        console.log("mongo not connected.....")
        console.log(error);
    }else{
        console.log('mongo connected');
    }
})


//urls

app.get('/',(req,res)=>{
    res.send("Welcome to harvijaysinh's website" )
})


//session

app.get('/login',sessionController.login)
app.get('/signup',sessionController.signup)
app.get('/saveuser',sessionController.saveUser)

//role

app.post('/roles',roleController.addRole)
app.get('/roles',roleController.getAllRoles)
app.delete('/roles/:roleId',roleController.deleteRole)
app.put('/roles/:roleId',roleController.updateRole)

//user

app.post('/users',userController.addUser)
app.get('/users',userController.getAllUsers)
app.delete('/users/:userId',userController.deleteUser)
app.put('/users/:userId',userController.updateUser)

//vehicle

app.post('/vehicles',vehicleController.addVehicle)
app.get('/vehicles',vehicleController.getAllVehicle)
app.delete('/vehicles/:vehicleId',vehicleController.deleteVehicle)
app.put('/vehicles/:vehicleId',vehicleController.updateVehicle)

app.listen(port,()=>{
    console.log(`hello server started on ${port} `);
})