const fs=require('fs');

// console.log('you are in controller');
function login(req,res){

    res.send('login sucessful....')

}

function signup(req,res){
    let signupHtml=fs.readFileSync("./views/signup.html")
    res.write(signupHtml)
}

function saveUser(req,res){
    res.json({
        msg:'data saved',
        status:200,
        data:req.body

    })
}


module.exports.login=login
module.exports.signup=signup
module.exports.saveUser=saveUser