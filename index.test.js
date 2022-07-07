const sum =require("./index");

describe("Testing sum function", ()=>{
    test('Add 2 positive numbers', () => { 
        expect(sum(1,2)).toBe(3);
    });
    test('Add 2 negative numbers', () => { 
        expect(sum(-1,-2)).toBe(-3);
    });
    test('Add 3 numbers', () => { 
        expect(sum(1,2,3)).toBe(6);
    });
    test('Add 5 numbers', () => { 
        expect(sum(1,2,3,4,5)).toBe(15);
    });
});