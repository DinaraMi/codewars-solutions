function nthChar(words: []) {
    return words.map((word, index) => word[index]).join('')
}