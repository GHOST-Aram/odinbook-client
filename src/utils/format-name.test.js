import { formatName } from "./format-name"
describe('Format Name function', () =>{
    test('Returns capitalized string given a lowercase string', () => {
        const formated = formatName('education')
        expect(formated).toBe('Education')
    })

    test('Replaces underscores with whitespace and capitalizes individual strings', () =>{
        expect(formatName('first_name')).toBe('First Name')
    })
})