const gumballService = require('../services/gumballService');

function getGumballsByMachine(req, res) {
  const machineId = parseInt(req.query.machineId);
  if (!machineId) return res.status(400).json({ error: 'machineId is required' });
  res.json(gumballService.getGumballsByMachine(machineId));
}

function addGumball(req, res) {
  const { color, machineId } = req.body;
  if (!color || !machineId) return res.status(400).json({ error: 'Color and machineId are required' });
  const gumball = gumballService.addGumball(color, parseInt(machineId));
  if (!gumball) return res.status(404).json({ error: 'Machine not found' });
  res.status(201).json(gumball);
}

function deleteGumball(req, res) {
  const id = parseInt(req.params.id);
  const deleted = gumballService.deleteGumball(id);
  if (!deleted) return res.status(404).json({ error: 'Gumball not found' });
  res.json(deleted);
}

module.exports = { getGumballsByMachine, addGumball, deleteGumball };
