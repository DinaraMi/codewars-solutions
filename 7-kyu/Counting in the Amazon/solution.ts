const countArara = (n: number) =>
    `${"adak ".repeat(Math.floor(n / 2))}${n % 2 ? "anane" : ""}`.trim();
