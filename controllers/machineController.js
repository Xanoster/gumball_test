const machineService = require('../services/machineService');

function getAllMachines(req, res) {
  res.json(machineService.getAllMachines());
}

function addMachine(req, res) {
  const { location } = req.body;
  if (!location) return res.status(400).json({ error: 'Location is required' });
  const machine = machineService.addMachine(location);
  res.status(201).json(machine);
}

function deleteMachine(req, res) {
  const id = parseInt(req.params.id);
  const deleted = machineService.deleteMachine(id);
  if (!deleted) return res.status(404).json({ error: 'Machine not found' });
  res.json(deleted);
}

module.exports = { getAllMachines, addMachine, deleteMachine };
