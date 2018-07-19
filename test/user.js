const request = require('supertest');
const app = require('../server');
const Contact = require('../models/Contact');
const contacts = require('./data.json');

before(() => {
	Contact.remove({});
	Contact.insertMany(contacts);
})

describe('GET /contact', () => {
	it('should get all the contacts', done => {
		request(app)
			.get('/contact')
			.expect(200, done);
	});
});
