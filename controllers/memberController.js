let memberController = module.exports;

memberController.home = (req,res) => {
    console.log("GET cont.home");
    res.send("You are in home page");
};

memberController.signup = (req,res) => {
    console.log("GET cont.signup");
    res.send("You are in signup page");
};

memberController.login = (req,res) => {
    console.log("GET cont.login");
    res.send("You are in login page");
};

memberController.logout = (req,res) => {
    console.log("GET cont.logout");
    res.send("You are in logout page");
};