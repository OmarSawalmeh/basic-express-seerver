'use strict';

const server = require('../src/server');

const supertest = require('supertest');
const request = supertest(server.app);

describe("API SERVER", ()=>{

    test("Test Home Route", async ()=>{
        const response = await request.get("/");
        expect(response.text).toEqual("Liverpool");
    });

    test("Test Handler Error 404", async ()=>{
        const response = await request.get("/ynwa");
        expect(response.status).toEqual(404);
    });

    test("Test Handler Error 500 The Name Empty Or not String", async ()=>{
        const response = await request.get("/person/?name=");
        expect(response.status).toEqual(500);
        //expect(response.text).toEqual("/person/");
    });

})