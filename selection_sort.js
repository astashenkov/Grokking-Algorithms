// Сhapter №2


function selectionSort(arr) {
    let i = 0,
        newArr = [];

    while (arr.length) {
        i = findIndexMin(arr);
        newArr.push(arr[i]);
        arr.splice(i, 1);
    }

    return newArr;
}

function findIndexMin(arr) {
    let index = 0,
        min = arr[0];
    arr.forEach((element, i) => {
        if (element < min) {
            min = element;
            index = i;
        }
    });
    return index;
}

let arr = [-6, 463, 88, 91, 4000, 24, 9, 677, 30, 5, 0];
console.log(selectionSort(arr));