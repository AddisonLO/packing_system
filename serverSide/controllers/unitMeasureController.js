const UnitMeasure = require("../models/UnitMeasure");

// Get all unit measures
async function getAllUnitMeasures(req, res) {
  try {
    const data = await UnitMeasure.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get one unit measure by name
async function getUnitMeasureByName(req, res) {
  try {
    const item = await UnitMeasure.findByPk(req.params.name);
    if (!item) return res.status(404).json({ error: "Unit measure not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new unit measure
async function createUnitMeasure(req, res) {
  try {
    const newItem = await UnitMeasure.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Unit measure already exists" });
    }
    res.status(400).json({ error: error.message });
  }
}

// Update a unit measure by name
async function updateUnitMeasureByName(req, res) {
  try {
    const item = await UnitMeasure.findByPk(req.params.name);
    if (!item) return res.status(404).json({ error: "Unit measure not found" });

    await item.update(req.body);
    res.json(item);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(409)
        .json({ error: "Unit measure name already exists" });
    }
    res.status(400).json({ error: error.message });
  }
}

// Delete a unit measure by name
async function deleteUnitMeasureByName(req, res) {
  try {
    const deleted = await UnitMeasure.destroy({
      where: { UM_Name: req.params.name },
    });
    if (!deleted)
      return res.status(404).json({ error: "Unit measure not found" });
    res.json({ message: "Unit measure deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUnitMeasures,
  getUnitMeasureByName,
  createUnitMeasure,
  updateUnitMeasureByName,
  deleteUnitMeasureByName,
};
