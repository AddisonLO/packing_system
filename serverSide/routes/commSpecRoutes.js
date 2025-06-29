const express = require("express");
const router = express.Router();
const {
  getAllCommSpecs,
  getCommSpecByDescription,
  createCommSpec,
  updateCommSpecByDescription,
  deleteCommSpecByDescription,
} = require("../controllers/commSpecController");

router.get("/", getAllCommSpecs);
router.get("/:description", getCommSpecByDescription);
router.post("/", createCommSpec);
router.put("/:description", updateCommSpecByDescription);
router.delete("/:description", deleteCommSpecByDescription);

module.exports = router;
