const user=require('../models/user');

exports.getLogin=(req,res,next)=>{
res.send("HI");
};

exports.postLogin=(req,res,next)=>{
    console.log("ss");
    };

exports.getRegister=(req,res,next)=>{
    res.send("yo");
};

exports.postRegister=(req,res,next)=>{
    console.log("ss");
};
