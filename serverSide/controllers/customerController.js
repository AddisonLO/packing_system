const Customer = require("../models/Customer");

// Get all customers
async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get one customer by primary key (CUSTOMER_NAME)
async function getCustomerByName(req, res) {
  try {
    const customer = await Customer.findByPk(req.params.name);
    if (!customer) return res.status(404).json({ error: "Customer not found" });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new customer
async function createCustomer(req, res) {
  try {
    const newCustomer = await Customer.create(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError")
      return res.status(409).json({ error: "Customer name already exists" });

    res.status(400).json({ error: error.message });
  }
}

// Update a customer by primary key (CUSTOMER_NAME)
async function updateCustomerByName(req, res) {
  try {
    const customer = await Customer.findByPk(req.params.name);
    if (!customer) return res.status(404).json({ error: "Customer not found" });

    await customer.update(req.body);
    res.json(customer);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError")
      return res.status(409).json({ error: "Customer name already exists" });

    res.status(400).json({ error: error.message });
  }
}

// Delete a customer by primary key (CUSTOMER_NAME)
async function deleteCustomerByName(req, res) {
  try {
    const deleted = await Customer.destroy({
      where: { CUSTOMER_NAME: req.params.name },
    });
    if (!deleted) return res.status(404).json({ error: "Customer not found" });
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCustomers,
  getCustomerByName,
  createCustomer,
  updateCustomerByName,
  deleteCustomerByName,
};
