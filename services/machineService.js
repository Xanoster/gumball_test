const { machines, Machine } = require('../models/machine');

function getAllMachines() {
  return machines;
}

function addMachine(location) {
  const machine = new Machine(location);
  machines.push(machine);
  return machine;
}

function deleteMachine(id) {
  const index = machines.findIndex(m => m.id === id);
  if (index === -1) return null;
  return machines.splice(index, 1)[0];
}

module.exports = { getAllMachines, addMachine, deleteMachine };
