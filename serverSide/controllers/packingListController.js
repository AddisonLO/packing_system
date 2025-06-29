const PackingList = require("../models/PackingList");

function calculateAutoFields(data) {
  const cartonTotal = parseFloat(data.cartonTotal || 0);
  const qtyPerCarton = parseFloat(data.qtyPerCarton || 0);
  const gwPerCarton = parseFloat(data.gwPerCarton || 0);
  const nwPerCarton = parseFloat(data.nwPerCarton || 0);

  return {
    totalQty: cartonTotal * qtyPerCarton,
    totalGW: cartonTotal * gwPerCarton,
    totalNW: cartonTotal * nwPerCarton,
  };
}

async function getAll(req, res) {
  try {
    const data = await PackingList.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOne(req, res) {
  try {
    const item = await PackingList.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function create(req, res) {
  try {
    const computed = calculateAutoFields(req.body);
    const newItem = await PackingList.create({ ...req.body, ...computed });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const item = await PackingList.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });

    const computed = calculateAutoFields(req.body);
    await item.update({ ...req.body, ...computed });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    const deleted = await PackingList.destroy({
      where: { item_number: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: "Not found" });
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
