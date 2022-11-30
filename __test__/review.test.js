const supertest = require('supertest');
const {app,server} = require('../index');
const request = supertest(app);
const mongoose = require('mongoose');

afterAll(async () => {
    mongoose.connection.close();
    server.close();
});

//nueva review de un producto
describe('POST /reviews', () => {
    describe('when the review is added', () => {
        test('should respond with 200', async () => {
            const response = await request.post('/reviews').send({
                user_id: "1",
                product_id: "5f3a0b5f7b5b5d0017c1f2e1",
                review: "test"
            });
            expect(response.status).toBe(200);
        })
    })
    describe('when the review is not added', () => {
        test('should respond with 400', async () => {
            const response = await request.post('/reviews').send({
                user_id: "1",
                product_id: "5f3a0b5f7b5b5d0017c1f2e1"
            });
            expect(response.status).toBe(400);
        })
    })
})
// mostrar las reviews de un producto
describe('GET /reviews/rating', () => {
    describe('when the reviews exists', () => {
        test('should respond with 200', async () => {
            const response = await request.get('/reviews/rating?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(200);
        })
    })
    describe('when the reviews does not exist', () => {
        test('should respond with 404', async () => {
            const response = await request.get('/reviews/rating?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(404);
        })
    })
})
// eliminar una review de un producto
describe('DELETE /reviews', () => {
    describe('when the review is deleted', () => {
        test('should respond with 200', async () => {
            const response = await request.delete('/reviews?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(200);
        })
    })
    describe('when the review is not deleted', () => {
        test('should respond with 404', async () => {
            const response = await request.delete('/reviews?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(404);
        })
    })
})

