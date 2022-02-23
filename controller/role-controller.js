const RoleModel = require("../model/role-model")


function addRole(req, res) {
    //mongo insert role
    console.log(req.body.roleName);

    let role = new RoleModel({
        roleName: req.body.roleName
    })

    role.save((error, data) => {

        if (error) {
            res.json({
                msg: 'Somthing Went Wrong.....',
                status: -1,
                data: error
            })

        } else {
            res.json({
                msg: 'role added .....',
                status: 200,
                data: data
            })
        }
    })
}

function getAllRoles(req, res) {

    // role->mongo->select*from roles

    RoleModel.find((error, roles) => {
        if (error) {
            res.json({
                msg: 'Somthing Went Wrong.....',
                status: -1,
                data: error
            })

        } else {
            res.json({
                msg: 'Here is all roles .....',
                status: 200,
                data: roles
            })
        }
    })
}

function deleteRole(req, res) {

    let roleId = req.params.roleId

    RoleModel.deleteOne({ '_id': roleId }, (error, data) => {
        if (error) {
            res.json({
                msg: 'Somthing Went Wrong.....',
                status: -1,
                data: error
            })

        } else {
            res.json({
                msg: 'role removed .....',
                status: 200,
                data: data
            })
        }

    })

}

function updateRole(req, res) {


    const user={
     
     roleName : req.body.roleName
    }
    RoleModel.updateOne({ _id: req.params.roleId }, { $set:user }, (error, data) => {
        if (error) {
            res.json({
                msg: 'Somthing Went Wrong.....',
                status: -1,
                data: error
            })

        } else {
            res.json({
                msg: 'role updated .....',
                status: 200,
                data: data
            })
        }
    })

}



module.exports.addRole = addRole;
module.exports.getAllRoles = getAllRoles;
module.exports.deleteRole = deleteRole;
module.exports.updateRole = updateRole;
