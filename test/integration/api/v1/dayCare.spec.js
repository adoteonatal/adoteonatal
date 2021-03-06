const chai = require('chai');
const request = require('supertest');
const faker = require('faker');

const server = require('../../../fixture/server');
const { getToken } = require('./auth.helper');

chai.should();

let instance;
let token = '';

before(async () => {
  instance = await server();
});

beforeEach(async () => {
  token = await getToken();
});

suite('Day Cares', () => {
  suite('#list', () => {
    test('should return an array list with Day Cares', async () => {
      const res = await request(instance)
        .get('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      res.body.data.should.be.an('array');
    });
  });

  suite('#create', () => {
    test('should create a new day care', async () => {
      const name = faker.internet.userName();

      const res = await request(instance)
        .post('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .send({ name })
        .expect(201);

      res.body.should.be.an('object');
      res.body.name.should.be.equal(name);
    });

    test('should fail to create a new day care when name is duplicated', async () => {
      const name = faker.internet.userName();

      await request(instance)
        .post('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .send({ name })
        .expect(201);

      const res = await request(instance)
        .post('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .send({ name })
        .expect(500);

      res.body.should.be.an('object');
      res.body.error.should.be.equal('ValidationError: name: Given day care is already in use');
    });

    test('should fail to create a new day care when name is undefined', async () => {
      const res = await request(instance)
        .post('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .send({})
        .expect(500);

      res.body.should.be.an('object');
      res.body.error.should.be.equal('ValidationError: name: DayCare [name] field is required');
    });

    test('should fail to create a new day care when name is blank', async () => {
      const res = await request(instance)
        .post('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: ' ' })
        .expect(500);

      res.body.should.be.an('object');
      res.body.error.should.be.equal('ValidationError: name: DayCare [name] field is required');
    });
  });

  suite('#update', () => {
    test('should update an day care with some variables', async () => {
      const expectName = faker.internet.userName();
      const name = faker.internet.userName();

      const dayCareInsert = await request(instance)
        .post('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .send({ name })
        .expect(201);

      const res = await request(instance)
        .put(`/v1/day-cares/${dayCareInsert.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({ name: expectName })
        .expect(200);

      res.body.should.be.an('object');
      res.body.name.should.be.equal(expectName);
    });
  });

  suite('#delete', () => {
    test('should delete an day care', async () => {
      const name = faker.internet.userName();

      const dayCareInsert = await request(instance)
        .post('/v1/day-cares')
        .set('Authorization', `Bearer ${token}`)
        .send({ name })
        .expect(201);

      const res = await request(instance)
        .delete(`/v1/day-cares/${dayCareInsert.body._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(204);

      res.body
        .should.be.an('object')
        .that.is.empty;
    });

    test('should succeed even when day care does not exist', async () => {
      const res = await request(instance)
        .delete('/v1/day-cares/598ce31fd826193bbe675726')
        .set('Authorization', `Bearer ${token}`)
        .expect(204);

      res.body
        .should.be.an('object')
        .that.is.empty;
    });
  });
});
