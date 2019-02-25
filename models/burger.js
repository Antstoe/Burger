var orm = require("../config/orm.js");

// object containing functions to execute the defined orm's
var burger = {
  selectAll: function (callback) {
    orm.selectAll("burgers", function (resp) {
      callback(resp);
    });
  },
  // The variables cols and vals are arrays.
  createBurger: function (columns, values, callback) {
    orm.insertOne("burgers", columns, values, function (resp) {
      callback(resp);
    });
  },

  devourBurger: function (columnValue, condition, callback) {
    orm.update("burgers", columnValue, condition, function (resp) {
      callback(resp);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;