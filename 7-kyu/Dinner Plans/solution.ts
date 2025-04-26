function commonGround(s1: string, s2: string) {
    const words1 = s1.split(' ')
    const words2 = s2.split(' ')
    const filterWords = words2.filter((word, index, item) => {
        const isInS1 = words1.indexOf(word) !== -1
        const isFirstOccurrenceInS2 = item.indexOf(word) === index;
        return isInS1 && isFirstOccurrenceInS2
    })
    if (filterWords.length === 0) {
        return "death";
    } else {
        return filterWords.join(' ');
    }
}