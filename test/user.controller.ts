import 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Server from '../server';

describe('User', () => {
  it('should get all users', () =>
    request(Server)
      .get('/api/v1/user')
      .expect('Content-Type', /json/)
      .then((r) => {
        expect(r.body).to.be.an('array').of.length(2);
      }));

  it('should add a new user', () => {
    const firstName = '{firstName}';
    const lastName = '{lastName}';
    const email = '{email}';
    const password = '{password}';

    request(Server)
      .post('/api/v1/examples')
      .send({ firstName, lastName, email, password })
      .expect('Content-Type', /json/)
      .then((r) => {
        console.log(r.body);
        expect(r.body)
          .to.be.an('object')
          .that.has.property('firstName')
          .equal(firstName)
          .and.that.has.property('lastName')
          .equal(lastName)
          .and.that.has.property('email')
          .equal(email)
          .and.that.has.property('password')
          .equal(password)
          .and.that.has.property('id')
          .to.be.a('string');
      });
  });
});
