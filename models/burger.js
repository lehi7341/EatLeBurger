var orm = require("../config/orm.js");
// Contains all the methods that will be used to modify the orm for use with the burgers db
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
