const express = require("express");

const commodityRoutes = require("../routes/commodityRoutes");
const commSpecRoutes = require("../routes/commSpecRoutes");
const customerRoutes = require("../routes/customerRoutes");
const exporterRoutes = require("../routes/exporterRoutes");
const packingListRoutes = require("../routes/packingListRoutes");
const supplierRoutes = require("../routes/supplierRoutes");
const unitMeasureRoutes = require("../routes/unitMeasureRoutes");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/packing-list", packingListRoutes);
  app.use("/api/commodities", commodityRoutes);
  app.use("/api/comm-specs", commSpecRoutes);
  app.use("/api/customers", customerRoutes);
  app.use("/api/exporters", exporterRoutes);
  app.use("/api/suppliers", supplierRoutes);
  app.use("/api/unit-measures", unitMeasureRoutes);
};
