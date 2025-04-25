function sortGrades(arr: []) {
    const sortNumber = (num: string) => {
        if (num === 'VB') return 0;
        if (num === 'V0') return 1;
        if (num === 'V0+') return 2;
        return parseInt(num.slice(1)) + 3;
    }
    return arr.slice().sort((a, b) => sortNumber(a) - sortNumber(b))
}