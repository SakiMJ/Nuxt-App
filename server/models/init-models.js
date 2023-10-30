var DataTypes = require("sequelize").DataTypes;
var _Account = require("./account");
var _Club = require("./club");
var _Desk = require("./desk");
var _Student = require("./student");

function initModels(sequelize) {
  var Account = _Account(sequelize, DataTypes);
  var Club = _Club(sequelize, DataTypes);
  var Desk = _Desk(sequelize, DataTypes);
  var Student = _Student(sequelize, DataTypes);


  return {
    Account,
    Club,
    Desk,
    Student,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
