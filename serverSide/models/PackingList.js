const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Commodity = require("./Commodity");
const CommSpec = require("./CommSpec");
const Supplier = require("./Supplier");
const UnitMeasure = require("./UnitMeasure");

const PackingList = sequelize.define(
  "PackingList",
  {
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

      // TODO item_number is written in the requirement having a maximum of 3 digits
    },
    container_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    commodities: {
      type: DataTypes.STRING(40),
      allowNull: false,
      references: {
        model: Commodity,
        key: "Commodities_English",
      },
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: CommSpec,
        key: "Description",
      },
    },
    supplier: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: Supplier,
        key: "Supplier_Name",
      },
    },
    cn: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    cartonTotal: {
      type: DataTypes.DECIMAL(5, 0),
      allowNull: false,
    },
    qtyPerCarton: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: UnitMeasure,
        key: "UM_Name",
      },
    },
    totalQty: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false, // auto-calculated
    },
    gwPerCarton: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    nwPerCarton: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    totalGW: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false, // auto-calculated
    },
    totalNW: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false, // auto-calculated
    },
    measurement: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    cbm: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    remark1: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    remark2: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    remark3: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "PACKING_LIST",
    timestamps: false,
  }
);

module.exports = PackingList;
