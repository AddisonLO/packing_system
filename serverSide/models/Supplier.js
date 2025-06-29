const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Supplier = sequelize.define(
  "Supplier",
  {
    Supplier_Name: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    tableName: "SUPPLIER",
    timestamps: false,
  }
);

module.exports = Supplier;
