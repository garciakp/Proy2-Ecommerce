const supertest = require('supertest');
const {app,server} = require('../index');
const request = supertest(app);
const mongoose = require('mongoose');
const Product = require('../models/product');


afterAll(async () => {
    mongoose.connection.close();
    server.close();
});
// obtiene producto segun su nombre
describe('GET /products/search', () => {
    describe('when the product exists', () => {
        test('should respond with 200', async () => {
            const response = await request.get('/products/search?name=iphone');
            expect(response.status).toBe(200);
        })
    })
    describe('when the product does not exist', () => {
        test('should respond with 404', async () => {
            const response = await request.get('/products/search?name=iphone');
            expect(response.status).toBe(404);
        })
    })
})
// obtiene producto segun su categoria
describe('GET /products/category', () => {
    describe('when the product exists', () => {
        test('should respond with 200', async () => {
            const response = await request.get('/products/category?category=iphone');
            expect(response.status).toBe(200);
        })
    })
    describe('when the product does not exist', () => {
        test('should respond with 404', async () => {
            const response = await request.get('/products/category?category=iphone');
            expect(response.status).toBe(404);
        })
    })
})
// obtiene producto segun su id
describe('GET /products', () => {
    describe('when the product exists', () => {
        test('should respond with 200', async () => {
            const response = await request.get('/products?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(200);
        })
    })
    describe('when the product does not exist', () => {
        test('should respond with 404', async () => {
            const response = await request.get('/products?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(404);
        })
    })
})
// añade un producto
describe('POST /products', () => {
    describe('when the product is added', () => {
        test('should respond with 200', async () => {
            const response = await request.post('/products').send({
                owner_id: "5f3a0b5f7b5b5d0017c1f2e1",
                name: "test",
                description: "test",
                price: 100,
            });
            expect(response.status).toBe(200);
        })
    })
    describe('when the product is not added', () => {
        test('should respond with 400', async () => {
            const response = await request.post('/products').send({
                owner_id: "5f3a0b5f7b5b5d0017c1f2e1",
                name: "test",
                description: "test",
            });
            expect(response.status).toBe(400);
        })
    })
})
// actualiza un producto
describe('PUT /products', () => {
    describe('when the product is updated', () => {
        test('should respond with 200', async () => {
            const response = await request.put('/products').send({
                product_id: "5f3a0b5f7b5b5d0017c1f2e1",
                name: "test",
                description: "test",
                price: 100,
            });
            expect(response.status).toBe(200);
        })
    })
    describe('when the product is not updated', () => {
        test('should respond with 400', async () => {
            const response = await request.put('/products').send({
                product_id: "5f3a0b5f7b5b5d0017c1f2e1",
                name: "test",
                description: "test",
            });
            expect(response.status).toBe(400);
        })
    })
})
// elimina un producto
describe('DELETE /products', () => {
    describe('when the product is deleted', () => {
        test('should respond with 200', async () => {
            const response = await request.delete('/products?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(200);
        })
    })
    describe('when the product is not deleted', () => {
        test('should respond with 400', async () => {
            const response = await request.delete('/products?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(400);
        })
    })
})
