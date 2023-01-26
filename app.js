var con = require('./db');
var http = require('http');
var express = require('express');
var app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/Population',function(req,res){
    // if (err) throw err;
    var sql = "select row_number() over (order by population desc ) as newid,city.* from world.city order by Population desc";
    con.query(sql,function (err,result) {
        if (err) throw err;
        // result = JSON.stringify(result);
        // res.json(result[0]);
        res.render(__dirname+"/View/city",{city:result})
        // console.log(result);
})
});

app.get('/Population',function(req,res) {
    res.sendFile(__dirname+'/View/city');
    });

app.get('/country',function(req,res){
        // if (err) throw err;
    var sql = "select * from Country";
    con.query(sql,function (err,result) {
            if (err) throw err;
        res.render(__dirname+"/View/country",{country:result})
            // console.log(result);
    })
    });
    
app.get('/country',function(req,res) {
    res.sendFile(__dirname+'/View/country');
    });

app.get('/',function(req,res) {
    res.sendFile(__dirname+'/index.html');
    });
app.listen(3000);
