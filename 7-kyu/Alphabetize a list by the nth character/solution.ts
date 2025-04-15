function sortIt(list: string, n: number) {
    return list
        .split(', ')
        .sort((a, b) => {
            const charA = a[n - 1].toLowerCase();
            const charB = b[n - 1].toLowerCase();
            if (charA === charB) {
                return a.toLowerCase().localeCompare(b.toLowerCase())
            }
            return charA.localeCompare(charB)
        })
        .join(', ');
}