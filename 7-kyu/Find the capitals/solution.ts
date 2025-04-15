var capitals = function (word: string) {
    return word.split("").map((char, index) => char >= 'A' && char <= 'Z' ? index : -1).filter(index => index !== -1)
};