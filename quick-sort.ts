
function partition(array: number[], low: number, high: number): number {
    const pivot: number = array[high];
    let idx: number = low - 1;

    for (let index = low; index < high; index++) {
        if (array[index] <= pivot) {
            idx++;
            let temp = array[idx];
            array[idx] = array[index];
            array[index] = temp;
        }
    }

    idx++;
    array[high] = array[idx];
    array[idx] = pivot;

    return idx;
}

function qs(array: number[], low: number, high: number): void {
    if (low >= high) {
        return;
    }

    let pivot = partition(array, low, high);

    qs(array, low, pivot - 1);
    qs(array, pivot + 1, high);
}

function quickSort(array: number[]): void {
    qs(array, 0, array.length - 1)
}


let unsorted: number[] = [50, 4, 6, 777, 123, 2111, 44, 1, 79, 1122, 45, 78, 963, 2458];
console.log(unsorted);

quickSort(unsorted);

console.log(unsorted);
