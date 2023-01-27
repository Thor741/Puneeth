var con = require('./db');
var http = require('http');
var express = require('express');
var app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/Population',function(req,res){
    var sql = "select * from city";
    con.query(sql,function (err,result) {
        if (err) throw err;
        res.render(__dirname+"/View/city",{city:result})
})
});

app.get('/Population',function(req,res) {
    res.sendFile(__dirname+'/View/city');
    });

app.get('/Population/:city',function(req,res){
        var sql = "select * from city where name="+"'"+req.params['city']+"'";
        con.query(sql,function (err,result) {
            if (err) throw err;
            res.render(__dirname+"/View/city",{city:result})
})
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
    res.sendFile(__dirname+'/index.html');
    });
    
app.listen(8080);