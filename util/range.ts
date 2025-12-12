export class Range {
    constructor(public from: number, public to: number) {
        if (to < from) throw new Error(`Invalid range ${from}-${to}`);
    }

    contains(n: number, inclusive = true): boolean {
        return inclusive ? (n >= this.from && n <= this.to) : (n > this.from && n < this.to);
    }

    overlaps(other: Range, inclusive = true) {
        return this.contains(other.from, inclusive)
            || this.contains(other.to, inclusive)
            || other.contains(this.from, inclusive)
            || other.contains(this.to, inclusive);
    }

    merge(other: Range) {
        return new Range(Math.min(this.from, other.from), Math.max(this.to, other.to));
    }

    count(inclusive = true) {
        return this.to - this.from + (inclusive ? 1 : 0);
    }
}