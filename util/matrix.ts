
export function transpose<T>(matrix: T[][]): T[][] {
    const y = matrix.length;
    const x = matrix[0].length;
    const result: T[][] = new Array(x).fill(null).map(() => new Array(y));
    for (let xx = 0; xx < x; xx++) {
        for (let yy = 0; yy < y; yy++) {
            result[xx][yy] = matrix[yy][xx]
        }
    }
    return result;
}