const express=require('express');
const app=express();
const path =require('path');
app.use('/public',express.static('public'));
app.get('/',function(req,res){
       console.log(req.route);
       console.log(req.query);
    res.send("hello world");

});
app.get('/layout',(req,res)=>{
    res.sendFile(path.join(__dirname,"/demo/layout.html"));
});
app.get('/layout-c',(req,res)=>{
    res.sendFile(path.join(__dirname,"/demo/layout-component.html"));
})

app.get('/icon',(req,res)=>{
	
	res.sendFile(path.join(__dirname,"/demo/icon.html"));
})

//我对这个文件进行了修改

const server =app.listen(80,()=>{
    let host=server.address().address
    let port=server.address().port
    console.log("服务器已经启动",host,port);

});

