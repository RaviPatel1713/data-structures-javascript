function recursiveFlattener(arr, newArr) {
    if (arr.constructor === Array) {
        for (let i = 0; i < arr.length; ++i) {
            recursiveFlattener(arr[i], newArr);
        }
    }
    else {
        newArr.push(arr);
    }
}

function steamrollArray(arr) {
    let newArr = [];
    recursiveFlattener(arr, newArr);
    return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


steamrollArray([1, [2], [3, [[4]]]]);