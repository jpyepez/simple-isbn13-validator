import { describe, it, expect } from 'vitest'
import isValidIsbn13 from './isValidIsbn13'

describe('isValidIsbn13 function', () => {
    it('should return true for valid ISBN-13', () => {
        const validCodes = ['978-0596528126', '9781788399081']

        validCodes.forEach((code) => {
            expect(isValidIsbn13(code)).toBe(true)
        })
    })

    it('should return false for invalid ISBN-13', () => {
        const invalidCodes = ['978-0596528120', '9781788399083']

        invalidCodes.forEach((code) => {
            expect(isValidIsbn13(code)).toBe(false)
        })
    })
})
