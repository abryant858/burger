var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(burger_name, cb) {
      var queryString = "INSERT INTO burgers(burger_name) VALUES('${burger_name}')";
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(condition, id, cb) {
      var queryString = "UPDATE burgers SET devoured = ${condition} WHERE id = ${id}";
      connection.query(queryString, function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
