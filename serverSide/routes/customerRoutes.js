const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  getCustomerByName,
  createCustomer,
  updateCustomerByName,
  deleteCustomerByName,
} = require("../controllers/customerController");

router.get("/", getAllCustomers);
router.get("/:name", getCustomerByName);
router.post("/", createCustomer);
router.put("/:name", updateCustomerByName);
router.delete("/:name", deleteCustomerByName);

module.exports = router;
