// створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах

let swap = (arr, index1, index2) =>{
    if(index1 < arr.length && index2 < arr.length){
        let i1 = arr[index1]; // 8
        arr[index1] = arr[index2];
        arr[index2] = i1;
        return arr;
    }
    return -Infinity;
}
console.log(swap([2, 7, 5, 6, 8, 55, 73], 1, 6));