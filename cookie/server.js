var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser())

app.get('/',function(req,res){
	// res.cookie('username','铁阳')
 // console.log(req.cookies.username);
 if (req.cookies.count) {
 	var n = req.cookies.count;
 	n++;
 	res.cookie('count',n);
 	res.send('欢迎第' + n + '次光临') 

 }else{
 	res.cookie('count',1)
 	 res.send('欢迎第1次光临')
 }
  
});

app.listen(8080,function(){
	console.log('server is running !')
});