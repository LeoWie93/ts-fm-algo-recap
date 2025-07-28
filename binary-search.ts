
function binarySearchList(haystack: number[], needle: number): number {
    let length = haystack.length;
    let low = 0;
    let high = length - 1;
    let m: number;
    let mValue: number;

    do {
        m = Math.floor((high - low) / 2) + low;
        mValue = haystack[m];

        if (needle == mValue) {
            return haystack[m];
        }

        if (needle > mValue) {
            low = m + 1;
        } else {
            high = m - 1;
        }
    } while (high >= low);

    return -1;
}

const numberss: number[] = [5, 10, 45, 455, 500, 5001];

console.log(binarySearchList(numberss, 45));

