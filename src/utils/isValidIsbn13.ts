const isValidIsbn13 = (isbn: string): boolean => {
    const initDigits = isbn.trim().replaceAll('-', '').slice(0, -1)
    const multipliedDigits = Array.from(initDigits, (digit, idx) => {
        const factor = idx % 2 === 0 ? 1 : 3
        return +digit * factor
    })

    const digitsSum = multipliedDigits.reduce((acc, curr) => acc + curr, 0)
    const digitsMod10 = digitsSum % 10
    const result = digitsMod10 === 0 ? 0 : 10 - digitsMod10

    return result === +isbn.slice(-1)
}

export default isValidIsbn13
