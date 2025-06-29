const express = require("express");
const router = express.Router();
const {
  getAllSuppliers,
  getSupplierByName,
  createSupplier,
  updateSupplierByName,
  deleteSupplierByName,
} = require("../controllers/supplierController");

router.get("/", getAllSuppliers);
router.get("/:name", getSupplierByName);
router.post("/", createSupplier);
router.put("/:name", updateSupplierByName);
router.delete("/:name", deleteSupplierByName);

module.exports = router;
