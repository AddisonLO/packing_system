const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Exporter = sequelize.define(
  "Exporter",
  {
    Exporter_Name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      primaryKey: true,
    },
    Address: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    tableName: "EXPORTER",
    timestamps: false,
  }
);

module.exports = Exporter;
