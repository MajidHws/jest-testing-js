const functions = require('./functions')

// beforeAll(() => console.log('DB is connected...'))
// afterAll(() => console.log('DB is closed...'))

beforeEach(() => console.log('DB is connected...'))
afterEach(() => console.log('DB is closed...'))

describe('describe checking names', () => {
    beforeEach(() => console.log('majid & majis...'))
    test('checking names to be true', () => {
        expect('Maji' + 'd').toBe('Majid')
    })

    test('checking names to be true', () => {
        expect('Maji' + 's').toBe('Majis')
    })
})



test('Addition Function', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Addition using NOT', () => {
    expect(functions.add(2, 2)).not.toBe(5) // this only works with primitive like not arrays or objects
})

test('To be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('To be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

test('return an object', () => {
    expect(functions.createUser()).toEqual({ // this only works arrays or objects
        firstName: 'Majid',
        lastName: 'Howsawi'
    })
})

test('To be less than', () => {
    expect(functions.equality(800, 700)).toBeLessThan(1600)
})

test('check some characters in a string', () => {
    // provide the letters you don't want to include in the regex and it is not case sensitive
    expect(functions.checkString('Majid')).not.toMatch(/p/) 
})

test('check if user in the array', () => {
    const usernames = ['Majid', 'Admin']
    expect(usernames).toContain(functions.isContain('Majid'))
})

test('async data', () => {
    expect.assertions(1)

    return functions.fetchUser()
    .then(res => {
        expect(res.name).toEqual('Leanne Graham')
    })
})