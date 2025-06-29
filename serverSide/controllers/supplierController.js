const Supplier = require("../models/Supplier");

// Get all suppliers
async function getAllSuppliers(req, res) {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get one supplier by name
async function getSupplierByName(req, res) {
  try {
    const supplier = await Supplier.findByPk(req.params.name);
    if (!supplier) return res.status(404).json({ error: "Supplier not found" });
    res.json(supplier);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new supplier
async function createSupplier(req, res) {
  try {
    const newSupplier = await Supplier.create(req.body);
    res.status(201).json(newSupplier);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Supplier already exists" });
    }
    res.status(400).json({ error: error.message });
  }
}

// Update a supplier by name
async function updateSupplierByName(req, res) {
  try {
    const supplier = await Supplier.findByPk(req.params.name);
    if (!supplier) return res.status(404).json({ error: "Supplier not found" });

    await supplier.update(req.body);
    res.json(supplier);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Supplier name already exists" });
    }
    res.status(400).json({ error: error.message });
  }
}

// Delete a supplier by name
async function deleteSupplierByName(req, res) {
  try {
    const deleted = await Supplier.destroy({
      where: { Supplier_Name: req.params.name },
    });
    if (!deleted) return res.status(404).json({ error: "Supplier not found" });
    res.json({ message: "Supplier deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllSuppliers,
  getSupplierByName,
  createSupplier,
  updateSupplierByName,
  deleteSupplierByName,
};
