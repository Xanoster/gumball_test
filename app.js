const express = require('express');
const bodyParser = require('body-parser');
const machineController = require('./controllers/machineController');
const gumballController = require('./controllers/gumballController');

// 1. Create the Express app
const app = express();

// In app.js, after const app = express();
const { machines } = require('./models/machine');
const { gumballs } = require('./models/gumball');

// Pre-populate some machines
machines.push({ id: 1, location: 'Lobby' });
machines.push({ id: 2, location: 'Cafeteria' });

// Pre-populate some gumballs
gumballs.push({ id: 1, color: 'red', machineId: 1 });
gumballs.push({ id: 2, color: 'blue', machineId: 1 });
gumballs.push({ id: 3, color: 'green', machineId: 2 });


// 2. Middleware
app.use(bodyParser.json());

// 3. Root landing page
app.get('/', (req, res) => {
  res.send(`
    <h1>Gumball Machine API</h1>
    <p>Click the links below to test the endpoints:</p>
    <ul>
      <li><a href="/machines">GET /machines</a> - List all machines</li>
      <li>
        POST /machines - Add a machine (use Postman or curl)<br>
        Example curl: <code>curl -X POST http://localhost:3000/machines -H "Content-Type: application/json" -d '{"location":"Lobby"}'</code>
      </li>
      <li>
        DELETE /machines/:id - Delete a machine (replace :id with actual id)<br>
        Example curl: <code>curl -X DELETE http://localhost:3000/machines/1</code>
      </li>
      <li>
        GET /gumballs?machineId=1 - List gumballs for machine 1<br>
        Example: <a href="/gumballs?machineId=1">/gumballs?machineId=1</a>
      </li>
      <li>
        POST /gumballs - Add a gumball (use Postman or curl)<br>
        Example curl: <code>curl -X POST http://localhost:3000/gumballs -H "Content-Type: application/json" -d '{"color":"red","machineId":1}'</code>
      </li>
      <li>
        DELETE /gumballs/:id - Delete a gumball (replace :id with actual id)<br>
        Example curl: <code>curl -X DELETE http://localhost:3000/gumballs/1</code>
      </li>
    </ul>
  `);
});

// 4. Machine Endpoints
app.get('/machines', machineController.getAllMachines);
app.post('/machines', machineController.addMachine);
app.delete('/machines/:id', machineController.deleteMachine);

// 5. Gumball Endpoints
app.get('/gumballs', gumballController.getGumballsByMachine);
app.post('/gumballs', gumballController.addGumball);
app.delete('/gumballs/:id', gumballController.deleteGumball);

// 6. Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Gumball Machine API running on http://localhost:${PORT}`);
});

module.exports = app;
