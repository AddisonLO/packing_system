const express = require("express");
const router = express.Router();
const {
  getAllExporters,
  getExporter,
  createExporter,
  updateExporter,
  deleteExporter,
} = require("../controllers/exporterController");

router.get("/", getAllExporters);
router.get("/:name", getExporter);
router.post("/", createExporter);
router.put("/:name", updateExporter);
router.delete("/:name", deleteExporter);

module.exports = router;
