function binarySearchList(array: number[], value: number): number {
    let lo: number = 0;
    let hi: number = array.length - 1;
    let m: number;
    let mValue: number;

    do {
        m = Math.round(lo + (hi - lo) / 2);
        mValue = array[m];

        if (array[m] === value) {
            return m;
        }

        if (mValue > value) {
            hi = m - 1;
        } else if (mValue < value) {
            lo = m + 1;
        }
    } while (lo <= hi)

    return -1;
}

const numbers: number[] = [5, 10, 45, 455, 500, 5001];

console.log(binarySearchList(numbers, 5002));
console.log(binarySearchList(numbers, 5001));

const numbersOther: number[] = [5, 10, 45, 60, 455, 500, 5001];

console.log(binarySearchList(numbersOther, 5001));
console.log(binarySearchList(numbersOther, 5002));
console.log(binarySearchList(numbersOther, 5));
