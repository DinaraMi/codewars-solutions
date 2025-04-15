function calc(x: string): number {
    const total1: string = x.split('').map(char => char.charCodeAt(0)).join('')
    const total2: string = total1.replace(/7/g, "1")
    const sum = (str: string): number => str.split('').map(Number).reduce((a, b) => a + b, 0)
    return sum(total1) - sum(total2)
}