var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.set('view engine','jade')





app.get('/',function(req,res){
	res.render('home')
});
	



app.get('/page',function(req,res){
	if (req.cookies.count) {
		res.render('login',{username:req.cookies.count})

	}else{
		res.redirect('/')
	}
})



app.post('/login',function(req,res){
	res.cookie('count',req.body.username)
	res.redirect('/page')
});




app.listen(8080,function(){
	console.log('running')
});