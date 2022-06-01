'use strict';

const server = require('../src/server');

const supertest = require('supertest');
const request = supertest(server.app);

describe("Validator Middleware.....", ()=>{

    test("Test If Status is 200 When Add A Valid Name To Query", async ()=>{
        const response = await request.get("/person/?name=MoSalah");
        expect(response.status).toEqual(200);
    });

    test("Test If A body Equal The Object given an name in the query string, the output object is correct", async ()=>{
        const response = await request.get("/person/?name=MoSalah");
        expect(typeof response.body).toEqual("object");
    });

    test("Test Handler Error 500 The Name Empty Or not a String", async ()=>{
        const response = await request.get("/person/?name=");
        expect(response.status).toEqual(500);
        //expect(response.text).toEqual("/person/");
    });

    test("Handle Not Found Request", async ()=>{
        const response = await request.post("/person/?name=Mo Salah");
        expect(response.status).toEqual(404);
    });



    test("Bad method", async ()=>{
        const response = await request.post("/person/?name=Mo Salah");
        expect(response.status).toEqual(404);
    });
    
})