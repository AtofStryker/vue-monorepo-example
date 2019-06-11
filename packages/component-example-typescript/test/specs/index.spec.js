describe('Test Suite', () => {

    var index = require("@/index.js")

    test('Contains default', () => {
        expect(index.default).toBeDefined()
    })
    test('Contains ComponentExampleTypescript', () => {
        expect(index.ComponentExampleTypescript).toBeDefined()
    })
})
