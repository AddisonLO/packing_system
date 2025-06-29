const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Supplier = require("./Supplier");
const UnitMeasure = require("./UnitMeasure");

const CommSpec = sequelize.define(
  "CommSpec",
  {
    Description: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    Ingredients: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    Supplier_Default: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: Supplier,
        key: "Supplier_Name",
      },
    },
    UM_Default: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: UnitMeasure,
        key: "UM_Name",
      },
    },
    Picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "COMM_SPEC",
    timestamps: false,
  }
);

module.exports = CommSpec;
