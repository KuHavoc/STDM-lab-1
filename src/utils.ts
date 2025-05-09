export function solve(a: number, b: number, c: number): number[] {
    const D = b * b - 4 * a * c;
    if (D > 0) {
        const sqrtD = Math.sqrt(D);
        const x1 = (-b - sqrtD) / (2 * a);
        const x2 = (-b + sqrtD) / (2 * a);
        return [x1, x2];
    } else if (D === 0) {
        return [ -b / (2 * a) ];
    } else {
        return [];
    }
}

export function fmt(n: number): string {
    return n.toFixed(4);
}

export function printEquation(a: number, b: number, c: number): void {
    console.log(`Equation is: (${fmt(a)}) x^2 + (${fmt(b)}) x + (${fmt(c)}) = 0`);
}