const { gumballs, Gumball } = require('../models/gumball');
const { machines } = require('../models/machine');

function getGumballsByMachine(machineId) {
  return gumballs.filter(g => g.machineId === machineId);
}

function addGumball(color, machineId) {
  const machineExists = machines.some(m => m.id === machineId);
  if (!machineExists) return null;
  const gumball = new Gumball(color, machineId);
  gumballs.push(gumball);
  return gumball;
}

function deleteGumball(id) {
  const index = gumballs.findIndex(g => g.id === id);
  if (index === -1) return null;
  return gumballs.splice(index, 1)[0];
}

module.exports = { getGumballsByMachine, addGumball, deleteGumball };
