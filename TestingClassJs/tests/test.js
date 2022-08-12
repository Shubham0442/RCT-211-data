const { describe } = require("yargs")

describe("toBe and not.toBe", ()=>{

    test(" 3 is 3", ()=>{
        expect (3).toBe(3)
    })

    test("booleans", ()=>{
        expect (true).toBe(true)
        expect (false).toBe(false)
        expect (true).not.toBe(false)
    })
})

describe("Reference data types", ()=>{
    test("{} !== {}", ()=>{
        expect ({}).not.toBe({})
    })

    test("[] !== []", ()=>{
        expect ([]).not.toBe([])
    }) 

    test("{} !== {}", ()=>{    //if they are referenceing to same memory location
        
        let temp = {}
        
        expect (temp).toBe(temp)

    })
}) 

describe("Check toEqual", ()=>{
    test("[] is equal to []", ()=>{
        expect([]).toEqual([])
    }) 

    test("[1,2,3] is equal to [1,2,3]", ()=>{
        expect([1,2,3]).toEqual([1,2,3])
    }) 

    test("[1,2,[3,4]] is equal to [1,2,[3,4]]", ()=>{
        expect([1,2,[3,4]]).toEqual([1,2,[3,4]])
    })

    test.only("Nested Array", ()=>{
        let a = [ 1,2,3 ]
        let b = [ a , b ]
        let c = [[1, 2, 3], a] 
        expect(b).toEqual(c);
    })
}) 

describe("Relational operators", ()=>{

    test("100+ 100 <=200", ()=>{
        expect (100 + 100).toBeLessThanOrEqual(200)
    })

    test("100 + 100 <=200", ()=>{
        expect (100 + 100).toBeLessThan(201)
    })

    test("100+ 100 <=200", ()=>{
        expect (101 + 101).toBeGreaterThanOrEqual(200)
    })
})