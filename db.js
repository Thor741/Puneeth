var mysql = require('mysql');

var express = require('express');
var app = express();

app.use(express.json());

var con = mysql.createConnection({
    host: 'puneeth',
    user: 'puneeth',
    password: '1289',
    database: 'world'
});


// app.get('/',function(err,req,res){
//     if (err) throw err;
    con.query("select * from city",function (result) {
        // if (err) throw err;
        console.log(result);
        // res.json(rows);
// })
});

// app.listen(3000);
module.exports = con;
