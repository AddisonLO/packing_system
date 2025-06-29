const Commodity = require("../models/Commodity");

// Get all commodities
async function getAll(req, res) {
  try {
    const commodities = await Commodity.findAll();
    res.json(commodities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get one commodity by English name (primary key)
async function getOne(req, res) {
  try {
    const item = await Commodity.findByPk(req.params.name);
    if (!item) return res.status(404).json({ error: "Commodity not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new commodity
async function create(req, res) {
  try {
    const newItem = await Commodity.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError")
      return res.status(409).json({ error: "Commodity already exists" });

    res.status(400).json({ error: error.message });
  }
}

// Update an existing commodity
async function update(req, res) {
  try {
    const item = await Commodity.findByPk(req.params.name);
    if (!item) return res.status(404).json({ error: "Commodity not found" });

    await item.update(req.body);
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a commodity
async function remove(req, res) {
  try {
    const deleted = await Commodity.destroy({
      where: { Commodities_English: req.params.name },
    });
    if (!deleted) return res.status(404).json({ error: "Commodity not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove,
};
