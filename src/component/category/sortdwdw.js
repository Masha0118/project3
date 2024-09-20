function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // 현재 요소보다 큰 요소를 오른쪽으로 이동
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        // 현재 요소를 올바른 위치에 삽입
        arr[j + 1] = key;
    }
    return arr;
}

let numbers = [4, 2, 15, 1];
console.log(insertionSort(numbers)); // [1, 2, 4, 15]
