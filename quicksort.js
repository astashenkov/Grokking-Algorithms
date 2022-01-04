// Chapter №4

function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[0],
        minArr = [],
        maxArr = [];
    arr.forEach((element, index) => {
        if (index !== 0) {(element <= pivot) ? minArr.push(element) : maxArr.push(element);}
    });
    return [].concat(quickSort(minArr), pivot, quickSort(maxArr)); 
}

console.log(quickSort([9, 5, 0, 10, 3, 6, 90, 101, 5, 6, 5, 7, 404, 45, 76]));