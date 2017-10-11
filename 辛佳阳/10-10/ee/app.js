var express=require("express");
var app=express();
var fs=require("fs");

// 只有请求的路径是list时才会响应
app.use(function(req,res,next){
    var t=new Date().toLocaleTimeString();
    fs.appendFile('./log.txt',t+"\n",function(err){
        if(err) throw err;
    });
    next();
})
app.get("/",function(req,res){
    res.send("首页")
})
app.listen(4000);