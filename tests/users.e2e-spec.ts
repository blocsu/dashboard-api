import request from 'supertest';
import { App } from 'supertest/types';
import { boot } from '../src/main';

let application: App;

beforeAll(async () => {
	const { app } = await boot;
	application = app;
});

describe('Users e2e', () => {
	it('Registr - error', async () => {
		const res = await request(application.app)
			.post('/users/register')
			.send({ email: 'a@a.ru', password: '1' });
		expect(res.statusCode).toBe(422);
	});
});

afterAll(() => {
	application.close();
});
