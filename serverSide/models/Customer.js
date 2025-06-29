const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Customer = sequelize.define(
  "Customer",
  {
    CUSTOMER_NAME: {
      type: DataTypes.STRING(80),
      allowNull: false,
      primaryKey: true,
    },
    ADDRESS_1: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    ADDRESS_2: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    ADDRESS_3: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    ADDRESS_4: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    ADDRESS_5: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    ADDRESS_6: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
  },
  {
    tableName: "CUSTOMER",
    timestamps: false,
  }
);

module.exports = Customer;
