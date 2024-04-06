const request = require('supertest');
const app = require('../models/server');

describe('GET /api/users', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(app).get('/api/users').send();
        expect(response.statusCode).toBe(200);
    });
});