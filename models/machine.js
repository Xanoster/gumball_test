const machines = [];
let nextId = 1;

class Machine {
  constructor(location) {
    this.id = nextId++;
    this.location = location;
  }
}

module.exports = { Machine, machines };
