function last(x: string) {
    return x.split(' ').sort((a, b) => {
        const lastA = a[a.length - 1]
        const lastB = b[b.length - 1]
        return lastA.localeCompare(lastB)
    })
}