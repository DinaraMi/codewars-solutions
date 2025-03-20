function check(a, x) {
    return a.includes(x);
}

function check2(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) return true;
    }
    return false;
}
