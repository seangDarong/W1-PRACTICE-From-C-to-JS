//count the number of word in a scentences
function countWordInScentences(scentences){
    let count = 0;
    if (scentences.length == 0){
        return 0;
    }
    for (let i = 0; i < scentences.length;i++){
        if (scentences[i] === " " && scentences !== " "){
            count++;
        }
    }
    return count+1;
}
let scentences1 = "hello world";
console.log(countWordInScentences(scentences1));
let scentences2 = "this is the best day";
console.log(countWordInScentences(scentences2));
let scentences3 =  "a bb ccc ddddddd e";
console.log(countWordInScentences(scentences3));