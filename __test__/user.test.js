const supertest = require('supertest');
const {app,server} = require('../index');
const request = supertest(app);
const mongoose = require('mongoose');


afterAll(async () => {
    mongoose.connection.close();
    server.close();
});
describe('POST /users', () => {
    describe ('Register a user with user and password', () => {
        test("should respond with 200", async () => {
            const response = await request.post('/users/register').send({
                username: "test",
                password: "test"
            });
            expect(response.status).toBe(200);
    })})
    describe ("when the username and password is missing", () => {
        test("should respond with 400", async () => {
            const response = await request.post('/users/register').send({
                username: "test"
            });
            expect(response.status).toBe(400);
        })
    })

    describe ('Login a user with user and password', () => {
        test("should respond with 200", async () => {
            const response = await request.post('/users/login').send({
                username: "test",
                password: "test"
            });
            expect(response.status).toBe(200);
    })
})
})