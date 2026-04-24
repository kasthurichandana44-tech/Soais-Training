function bubbleSort(arr: number[]): number[] {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const number = [5, 2, 9, 1, 3];
const sortedArray = bubbleSort(number);

console.log("Sorted array:", sortedArray);
