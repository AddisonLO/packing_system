const sequelize = require("../database");

const Commodity = require("./Commodity");
const CommSpec = require("./CommSpec");
const Supplier = require("./Supplier");
const UnitMeasure = require("./UnitMeasure");
const Exporter = require("./Exporter");
const Customer = require("./Customer");
const PackingList = require("./PackingList");

CommSpec.belongsTo(Supplier, { foreignKey: "Supplier_Default" });

CommSpec.belongsTo(UnitMeasure, { foreignKey: "UM_Default" });

PackingList.belongsTo(Commodity, {
  foreignKey: "commodities",
  targetKey: "Commodities_English",
  as: "Commodity",
});

PackingList.belongsTo(CommSpec, {
  foreignKey: "description",
  targetKey: "Description",
  as: "CommSpec",
});

PackingList.belongsTo(Supplier, {
  foreignKey: "supplier",
  targetKey: "Supplier_Name",
  as: "Supplier",
});

PackingList.belongsTo(UnitMeasure, {
  foreignKey: "unit",
  targetKey: "UM_Name",
  as: "UnitMeasure",
});

module.exports = {
  sequelize,
  Commodity,
  CommSpec,
  Supplier,
  UnitMeasure,
  Exporter,
  Customer,
};
