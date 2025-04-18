function well(x: any[]): string {
    const result = (arr: any[]): number => {
        return arr.reduce((acc: number, item: any): number => {
            if (Array.isArray(item)) {
                return acc + result(item);
            }
            if (item.toLowerCase() === 'good') {
                return acc + 1;
            }
            return acc;
        }, 0);
    };

    const finish = result(x);

    if (finish === 0) return 'Fail!';
    if (finish <= 2) return 'Publish!';
    return 'I smell a series!';
}
