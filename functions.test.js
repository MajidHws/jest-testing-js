const functions = require('./functions')

test('Addition Function', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Addition using NOT', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})