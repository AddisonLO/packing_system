const express = require("express");
const router = express.Router();
const commodityController = require("../controllers/commodityController");

router.get("/", commodityController.getAll);
router.get("/:name", commodityController.getOne);
router.post("/", commodityController.create);
router.put("/:name", commodityController.update);
router.delete("/:name", commodityController.remove);

module.exports = router;
