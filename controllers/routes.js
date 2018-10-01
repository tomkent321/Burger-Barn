var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');  //this is the first call to a real function to route

router.get('/', function (req, res){    //this comes from the orm
    burger.all(function(burger_data){
     
        console.log("returned to routes router.get('/')" , burger_data);
        
        res.render('index',{burger_data});
    })
    
})

router.put('/burgers/update', function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect('/');
        
    })
})

router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect('/');
        
    })
})


module.exports = router;  //this exposes any routes defined in the file to any other processes calling them as the server.js does as shown below:




//so it goes:

// 1. server.js: 

// var routes = require("./controllers/routes.js");  //this references the file
// app.use('/',routes);  //this references the actual route

// 2. orm.js:

// var connection = require("./connection.js");    //connection to the db

// var orm = {
//     all: function(tableInput, cb) {
//       connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
//         if(err) throw err;
//         cb(result)   //this passes the result of the query into the callback which is then passed to the next file to use it in the models folder
//       })
//     }
//   }

//   module.exports = orm;

//   3. routes.js

//   var router = express.Router();
//   var burger = require('../models/burger.js');  //this is the first call to a real function to route

//     router.get('/', function (req, res){    //this comes from the orm
//     burger.all(function(burger_data){
//         res.render('index');
//     })
    
// })

// module.exports = router; 

// 4. model