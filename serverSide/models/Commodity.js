const { DataTypes } = require("sequelize");
const  sequelize = require("../database");

const Commodity = sequelize.define(
  "Commodity",
  {
    Commodities_English: {
      type: DataTypes.STRING(40),
      primaryKey: true,
      allowNull: false,
    },
    Commodities_Chinese: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: "COMMODITIES",
    timestamps: false,
  }
);

module.exports = Commodity;
