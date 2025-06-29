const Exporter = require("../models/Exporter");

// Get all exporters
async function getAllExporters(req, res) {
  try {
    const exporters = await Exporter.findAll();
    res.json(exporters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get one exporter by primary key (Exporter_Name)
async function getExporter(req, res) {
  try {
    const exporter = await Exporter.findByPk(req.params.name);
    if (!exporter) {
      return res.status(404).json({ error: "Exporter not found" });
    }
    res.json(exporter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Create a new exporter
async function createExporter(req, res) {
  try {
    const newExporter = await Exporter.create(req.body);
    res.status(201).json(newExporter);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ error: "Exporter already exists" });
    }
    res.status(400).json({ error: error.message });
  }
}

// Update an exporter
async function updateExporter(req, res) {
  try {
    const exporter = await Exporter.findByPk(req.params.name);
    if (!exporter) {
      return res.status(404).json({ error: "Exporter not found" });
    }
    await exporter.update(req.body);
    res.json(exporter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete an exporter
async function deleteExporter(req, res) {
  try {
    const deleted = await Exporter.destroy({
      where: { Exporter_Name: req.params.name },
    });
    if (!deleted) {
      return res.status(404).json({ error: "Exporter not found" });
    }
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllExporters,
  getExporter,
  createExporter,
  updateExporter,
  deleteExporter,
};
