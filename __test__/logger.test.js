'use strict';

const logger = require('../src/middleware/logger');

describe("Logger Middleware.....", ()=>{
    let consoleSpy; // Initialize 
    let req = {};
    let res = {};
    let next = jest.fn();

    //console.log("--------------1111--------------YNWA", consoleSpy, req, res, next);

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console, "log")
                //         .mockImplementation(
                //     () => {
                //         console.error('this error from the mockImplementation')
                //     }
                // );
       //console.log("--------------222--------------YNWA", consoleSpy, req, res, next);
    });

    test("It Is Loggong", ()=>{
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
       //console.log("---------------33333-------------YNWA", consoleSpy, req, res, next);

    });

    test("It Is Callling Next", ()=>{
        expect(next).toHaveBeenCalled();
    })

    
    // afterEach(() => {
    //     consoleSpy.mockRestore();
    // });
})