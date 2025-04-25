function averageLength(array:[]) {
    const totalLength = Math.round(array.reduce((acc, item) => acc + item.length, 0) / array.length)
    return array.map(str => str[0].repeat(totalLength))
}