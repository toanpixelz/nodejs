"use strict";

module.exports = function(sequelize, DataTypes) {
  var VehicleBrand = sequelize.define("VehicleBrand", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Name not empty'
        }
      }
    },
     deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
  }
  ,
  {
      classMethods: {
        associate: function(models) {
        }
      }
    }

  );

  return VehicleBrand;
};
