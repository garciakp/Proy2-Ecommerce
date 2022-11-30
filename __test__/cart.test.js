const supertest = require('supertest');
const {app,server} = require('../index');
const request = supertest(app);
const mongoose = require('mongoose');


afterAll(async () => {
    mongoose.connection.close();
    server.close();
});
// añade productos al carrito
describe('POST /cart', () => {
    describe('when the product is added', () => {
        test('should respond with 200', async () => {
            const response = await request.post('/cart').send({
                product_id: "5f3a0b5f7b5b5d0017c1f2e1",
                quantity: 1
            });
            expect(response.status).toBe(200);
        })
    })
    describe('when the product is not added', () => {
        test('should respond with 400', async () => {
            const response = await request.post('/cart').send({
                product_id: "5f3a0b5f7b5b5d0017c1f2e1"
            });
            expect(response.status).toBe(400);
        })
    })
})
// mostrar los productos del carrito
describe('GET /cart', () => {
    describe('when the cart exists', () => {
        test('should respond with 200', async () => {
            const response = await request.get('/cart');
            expect(response.status).toBe(200);
        })
    })
    describe('when the cart does not exist', () => {
        test('should respond with 404', async () => {
            const response = await request.get('/cart');
            expect(response.status).toBe(404);
        })
    })
})
// eliminar un producto del carrito
describe('DELETE /cart', () => {
    describe('when the product is deleted', () => {
        test('should respond with 200', async () => {
            const response = await request.delete('/cart?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(200);
        })
    })
    describe('when the product is not deleted', () => {
        test('should respond with 404', async () => {
            const response = await request.delete('/cart?product_id=5f3a0b5f7b5b5d0017c1f2e1');
            expect(response.status).toBe(404);
        })
    })
})
// terminar la compra
describe('POST /cart/buy', () => {
    describe('when the purchase is made', () => {
        test('should respond with 200', async () => {
            const response = await request.post('/cart/buy');
            expect(response.status).toBe(200);
        })
    })
    describe('when the purchase is not made', () => {
        test('should respond with 400', async () => {
            const response = await request.post('/cart/buy');
            expect(response.status).toBe(400);
        })
    })
})
