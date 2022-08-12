
const sum = require("./index.js"); 

describe("Testing sum func", () => {
     test("Add 2 positive numbers", () => {
         expect(sum(1, 2)).toBe(3)
    });

    test("Add 2 negative numbers", () => {
        expect(sum(-1, -2)).toBe(-3)
    });

    test("Add 2 decimal numbers", () => {
        expect(sum(1.5, 2.3)).toBe(3.8)
    });

    test("Add 2 positive numbers as strings, output is integer", () => {
        expect(sum("1", "2")).toBe(3)
    });

    test("Call sum func without argument", () => {
        expect(sum()).toBe("No Argument Provided")
    });

    test("Call sum func with one argument", () => {
        expect(sum(1)).toBe("Needs one more argument")
    });
    test("Call sum func with more than two argument", () => {
        expect(sum(1, 2, 3)).toBe(6)
    });
}); 