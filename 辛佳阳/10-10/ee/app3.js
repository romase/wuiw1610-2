var express=require("express");
var app=express();

// 中间件
app.use(function(req,res,next){
    //中央
    req.money=10000;
    next();
})
app.use(function(req,res,next){
    //省里
    req.money=req.money-4000;
    next();
})
app.use(function(req,res,next){
    //市里
    req.money=req.money-2000;
    next();
})
app.use(function(req,res,next){
    //县里
    req.money=req.money-2000;
    next();
})
app.use(function(req,res,next){
    //乡里
    req.money=req.money-1000;
    next();
})
app.use(function(req,res,next){
    //村里
    req.money=req.money-500;
    next();
})



app.get("/",function(req,res){
    res.send(req.money+"")
})
app.listen(4000)