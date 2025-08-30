const gumballs = [];
let nextId = 1;

class Gumball {
  constructor(color, machineId) {
    this.id = nextId++;
    this.color = color;
    this.machineId = machineId;
  }
}

module.exports = { Gumball, gumballs };
