const caesarCipher = require('./main')


test('all letters are mapped correctly with a shift of 1', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const shiftedAlphabet = 'bcdefghijklmnopqrstuvwxyza'

    for (let i = 0; i < 26; i++) {
        expect(caesarCipher.code(alphabet[i], 1)).toBe(shiftedAlphabet[i])
    }
})

test('lowercase text is coded with a key of 1', () => {
    expect(caesarCipher.code('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('lowercase text is decoded with a key of -1', () => {
    expect(caesarCipher.decode('efgfoe uif fbtu xbmm pg uif dbtumf', 1))
    .toBe('defend the east wall of the castle')
})


test('case is preserved after coding', () => {
    expect(caesarCipher.code('Hello', 1)).toBe('Ifmmp')
})

test('case is preserved after decoding', () => {
    expect(caesarCipher.decode('IfMmP', 1)).toBe('HeLlO')
}) 

test('punctuation codes correctly', () => {
    expect(caesarCipher.code('Hello!!', 1)).toBe('Ifmmp!!')
})


test('punctuation decodes correctly', () => {
    expect(caesarCipher.decode('Ifmmp!!', 1)).toBe('Hello!!')
})