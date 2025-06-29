const express = require("express");
const router = express.Router();
const {
  getAllUnitMeasures,
  getUnitMeasureByName,
  createUnitMeasure,
  updateUnitMeasureByName,
  deleteUnitMeasureByName,
} = require("../controllers/unitMeasureController");

router.get("/", getAllUnitMeasures);
router.get("/:name", getUnitMeasureByName);
router.post("/", createUnitMeasure);
router.put("/:name", updateUnitMeasureByName);
router.delete("/:name", deleteUnitMeasureByName);

module.exports = router;
