function reverseArray(array){
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0 ;i--){
        reversedArray.push(array[i]);
        
    }
    return "[" + reversedArray.join(",") + "]";
}
let arr1 = [14,15,16,20];
console.log(reverseArray(arr1));
let arr2 = [5,4,3,2,1];
console.log(reverseArray(arr2));
let arr3 = [];
console.log(reverseArray(arr3));