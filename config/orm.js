// Import MySQL connection.  This was the original path
// var connection = require("../config/connection.js");

var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ' + tableInput + ';', function(err, result){
      if(err) throw err;
      cb(result)   //this passes the result of the query into the callback which is then passed to the next file to use it in the models folder
    })
  },

  update: function(tableInput, condition, cb) {
    var queryString = 'UPDATE ' +tableInput+ ' SET devoured=true WHERE id=' +condition+ ';';
    console.log("QS: " + queryString);
    
    connection.query('UPDATE ' +tableInput+ ' SET devoured=true WHERE id=' +condition+ ';', function(err,result){
      if(err) throw err;
      cb(result)
    })
  },

  create: function(tableInput, val, cb) {
    var queryString = 'INSERT INTO ' +tableInput+" (burger_name) VALUES ('" +val+"');";
    console.log("create QS: " + queryString);
    
    connection.query(queryString, function(err,result){
      if(err) throw err;
      cb(result)
    })
  }


}







module.exports = orm;
