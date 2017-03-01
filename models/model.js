"use strict";

module.exports = function(sequelize, DataTypes) {
  var Model = sequelize.define("Model", {
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
        notEmpty: true
      }
    },
    makeId: {
      type: DataTypes.BIGINT,
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

  return Model;
};
