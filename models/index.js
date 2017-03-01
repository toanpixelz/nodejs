// "use strict";

// var fs        = require("fs");
// var path      = require("path");
// var Sequelize = require("sequelize");
// var sequelize = new Sequelize("dbtoanpk", "root", "");

// var db = {};

// fs
//     .readdirSync(__dirname)
//     .filter(function(file) {
//         return (file.indexOf(".") !== 0) && (file !== "index.js");
//     })
//     .forEach(function(file) {
//         var model = sequelize["import"](path.join(__dirname, file));
//         db[model.name] = model;
//     });

// Object.keys(db).forEach(function(modelName) {
//     if ("associate" in db[modelName]) {
//         db[modelName].associate(db);
//     }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;


"use strict";
// diagram for db 2016/30/10
// http://prnt.sc/d0rlnh
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var storage = require('../common/storage');
var env = process.env.NODE_ENV || "development";

// var config = require(path.join(__dirname, '..', 'configdb', 'config.json'))[env];
var config = require(path.join(__dirname, '..', 'configdb', 'config.json'))[storage.getStartMode()];

//var sequelize = new Sequelize(config.database, config.username, config.password, config);
// var db        = {};
if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {

    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
console.log(config.database, "database");
var db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
