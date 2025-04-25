function capMe(names: string[]) {
    return names.map(item =>
        item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    );
}