const request = require('supertest');
const app = require('../app');

describe('Gumball API', () => {
  let machineId;
  let gumballId;

  beforeAll(async () => {
    const res = await request(app).post('/machines').send({ location: 'Lobby' });
    machineId = res.body.id;
  });

  it('should add a gumball', async () => {
    const res = await request(app).post('/gumballs').send({ color: 'red', machineId });
    expect(res.statusCode).toBe(201);
    expect(res.body.color).toBe('red');
    gumballId = res.body.id;
  });

  it('should list gumballs by machine', async () => {
    const res = await request(app).get(`/gumballs?machineId=${machineId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should delete a gumball', async () => {
    const res = await request(app).delete(`/gumballs/${gumballId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(gumballId);
  });
});
