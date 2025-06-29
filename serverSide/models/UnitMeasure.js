const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const UnitMeasure = sequelize.define(
  "UnitMeasure",
  {
    UM_Name: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
    },
    UM_Description: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: "UNIT_MEASURE",
    timestamps: false,
  }
);

module.exports = UnitMeasure;
