var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all('burgers', function(res) {   //this function will go to routes.js
        cb(res);
      })
    },

    update: function(id, cb) {
        orm.update('burgers', id, cb);  //this function will go to routes.js
      },
    
      create: function(name, cb) {
        orm.create('burgers', name, cb);  //this function will go to routes.js
      },


}

module.exports = burger;