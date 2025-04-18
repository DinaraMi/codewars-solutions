function validName(array: string []) {
    if (Array.isArray(array) && array.length === 0) {
        return "You must test at least one name."
    }
    if (array.length === 1) {
        return "Congratulations, you can choose any name you like!"
    }
    for (let i = 1; i < array.length; i++) {
        const prev = array[i - 1].toLowerCase();
        const current = array[i].toLowerCase();
        const first = current[0]
        const last = prev[prev.length - 1]
        if (last !== first) {
            return "Back to the drawing board, your baby names are not compatible."
        }
    }
    return "Congratulations, your baby names are compatible!"
} 