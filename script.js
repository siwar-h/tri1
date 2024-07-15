console.log ('Hello Wold')
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        // Pick the element to be inserted
        let current = arr[i];
        let j = i - 1;
        // Move elements of arr[0..i-1], that are greater than current, to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort([3,2,1,7,6,12]))