const request = require('supertest');
const app = require('../app');

describe('Machine API', () => {
  let machineId;

  it('should add a machine', async () => {
    const res = await request(app).post('/machines').send({ location: 'Lobby' });
    expect(res.statusCode).toBe(201);
    expect(res.body.location).toBe('Lobby');
    machineId = res.body.id;
  });

  it('should list all machines', async () => {
    const res = await request(app).get('/machines');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should delete a machine', async () => {
    const res = await request(app).delete(`/machines/${machineId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(machineId);
  });
});
