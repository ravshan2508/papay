let memberController = module.exports;
const Member = require("../models/Member");

memberController.signup = async (req,res) => {
    try {  
        console.log(`POST: cont/signup`);
        const data = req.body;
        const member = new Member();
        const new_member =  await member.signupData(data);

        res.json({state: 'success',data: new_member});
    } catch(err) {
        console.log(`ERROR,cont/signup,${err.message}`);
        res.json({state: 'fail',message: err.message});
    }
    
};

memberController.login = async (req,res) => {
    try {  
        console.log(`GET: cont/login`);
        const data = req.body;
        const member = new Member();
        const new_member =  await member.loginData(data);

        res.json({state: 'success',data: new_member});
    } catch(err) {
        console.log(`ERROR,cont/login,${err.message}`);
        res.json({state: 'fail',message: err.message});
    }
    
}; 

memberController.logout = (req,res) => {
    console.log("GET cont.logout");
    res.send("You are in logout page");
};