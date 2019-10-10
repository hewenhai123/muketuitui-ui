const express=require('express');
const app=express();
const path =require('path');
app.get('/',function(req,res){
       console.log(req.route);
       console.log(req.query);
    res.send("hello world");

});
app.get('/layout',(req,res)=>{


    res.sendFile(path.join(__dirname,"/demo/layout.html"));
})

const server =app.listen(8080,()=>{
    let host=server.address().address
    let port=server.address().port
    console.log("服务器已经启动",host,port);

});