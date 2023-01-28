var con = require('./db');
var http = require('http');
var express = require('express');
var app = express();
//for url
var body =require('body-parser');
//for url
app.use(body.json());
app.use(body.urlencoded({extended:true}))

app.use(express.json());
//for url
var sessiion = require('express-session');
var flush = require('connect-flash')
app.use(sessiion({
    secret: 'seceat',
    resave: false,
    saveUninitialized: false
}));
app.use(flush());
//for view ejs
app.set('view engine', 'ejs');

app.get('/Population',function(req,res){
    var name = req.query.Name
        var sql = "select * from city where name like "+"'"+name+"%"+"'";
        con.query(sql,function (err,result) {
            if (err) throw err;
            // console.log(name);
            res.render(__dirname+"/View/city",{city:result})
})
});

app.get('/Population',function(req,res) {
    res.sendFile(__dirname+'/View/city');
    });


app.get('/Population/:city',function(req,res) {
    res.sendFile(__dirname+'/View/city');
    });

app.get('/country',function(req,res){
    var sql = "select * from Country";
    con.query(sql,function (err,result) {
            if (err) throw err;
        res.render(__dirname+"/View/country",{country:result})
    })
    });
    
app.get('/country',function(req,res) {
    res.sendFile(__dirname+'/View/country');
    });

app.get('/',function(req,res) {
    res.render(__dirname+"/View/signup",{message : req.flash('message')})
    });

    app.post('/',function(req,res){
        var name = req.body.name;
        var phno = req.body.phno;
        var pass = req.body.pass;
            var sql = "insert into world.details (name,phno,pass) values ("+"'"+name+"',"+phno+",'"+pass+"')";
            con.query(sql,function (err,result) {
                if (err) 
                {   
                    req.flash('message',"User already exits...!");                        
                    res.render(__dirname+"/View/signin",{message : req.flash('message')})
                } else{
                res.sendFile(__dirname+'/index.html');
                };
    })
    });

    app.get('/signin',function(req,res) {
        res.render(__dirname+'/View/signin',{message : req.flash('message')})
    });
    
    app.post('/signin',function(req,res){
        var phno = req.body.phno;
        var pass = req.body.pass;
            var sql = "select * from details where phno="+phno+" and pass='"+pass+"'";
            con.query(sql,function (err,result) {
                if (err) throw err;
                
                if (result.length > 0) 
                {   
                    res.sendFile(__dirname+'/index.html');
                } else{
                    req.flash('message',"Please Check the details..!");                        
                    res.render(__dirname+"/View/signin",{message : req.flash('message')})
                // res.sendFile(__dirname+'/index.html');
                };
    })
    });
app.listen(8080);