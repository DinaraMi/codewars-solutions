export function test(number: number): boolean {
    return number % 2 === 0;
}

export const test2 = (arr: number[]): string[] =>
    arr.map(i => (i % 2 === 0 ? "even" : "odd"));

export const test3 = (arr: number[]): { key: number, value: "even" | "odd" }[] => {
    const result: { key: number, value: "even" | "odd" }[] = [];
    arr.forEach(i => {
        result.push({
            key: i,
            value: i % 2 === 0 ? "even" : "odd"
        }
            
        )
    })
    return result;
}

export const test4 = (arr: number[]): { key: string, value: "even" | "odd" }[] => {
    const result: { key: string, value: "even" | "odd" }[] = [];

    for (let i = 0; i < arr.length; i++) {
        result.push({
            key: arr[i].toString(),
            value: arr[i] % 2 === 0 ? "even" : "odd"
        });
    }

    return result;
};

export const test5 = (arr: number[]): { even: number[]; odd: number[] } => {
    return arr.reduce(
        (acc, num) => {
            if (num % 2 === 0) {
                acc.even.push();
            } else {
                acc.odd.push();
            }
            return acc;
        },
        { even: [], odd: [] }
    );
};
