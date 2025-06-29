const CommSpec = require("../models/CommSpec");

// Get all comm specs
async function getAllCommSpecs(req, res) {
  try {
    const items = await CommSpec.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get one comm spec by description (primary key)
async function getCommSpecByDescription(req, res) {
  try {
    const item = await CommSpec.findByPk(req.params.description);
    if (!item) return res.status(404).json({ error: "Comm spec not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new comm spec
async function createCommSpec(req, res) {
  try {
    const newItem = await CommSpec.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    // if (error.name === "SequelizeForeignKeyConstraintError") {
    //   return res
    //     .status(400)
    //     .json({ error: "Invalid Supplier_Default or UM_Default reference" });
    // }
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Description already exists" });
    }
    res.status(400).json({ error: error.message });
  }
}

// Update a comm spec by description
async function updateCommSpecByDescription(req, res) {
  try {
    const item = await CommSpec.findByPk(req.params.description);
    if (!item) return res.status(404).json({ error: "Comm spec not found" });

    await item.update(req.body);
    res.json(item);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Description already exists" });
    }
    res.status(400).json({ error: error.message });
  }
}

// Delete a comm spec by description
async function deleteCommSpecByDescription(req, res) {
  try {
    const deleted = await CommSpec.destroy({
      where: { Description: req.params.description },
    });
    if (!deleted) return res.status(404).json({ error: "Comm spec not found" });
    res.json({ message: "Comm spec deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllCommSpecs,
  getCommSpecByDescription,
  createCommSpec,
  updateCommSpecByDescription,
  deleteCommSpecByDescription,
};
