function calculateAverage(array){
    let sum = 0;
    if (array.length === 0){
        return 0;
    }
    for (let i = 0 ; i < array.length ;i++){
        sum+= array[i];
    }

    return sum / array.length;
}

let arr1 = [85, 90, 78, 92];
console.log(calculateAverage(arr1));
let arr2 = [10,20,30];
console.log(calculateAverage(arr2));
let arr3 = [];
console.log(calculateAverage(arr3));