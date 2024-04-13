const request = require('supertest');
const Server = require('../models/server');
const server = new Server();

describe('GET /api/users', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/users').send();
        expect(response.statusCode).toBe(200);
    });
});