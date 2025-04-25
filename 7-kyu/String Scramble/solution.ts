function scramble(str: string, arr: []) {
    const result = Array(str.length)
    for (let i = 0; i < str.length; i++) {
        result[arr[i]] = str[i]
    }
    return result.join('');
};