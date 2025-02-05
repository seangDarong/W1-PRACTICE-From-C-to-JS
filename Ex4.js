//write a function to count how many time a character appear in a string 
function countCharacter(str,char){
    let count = 0;
    for (let i = 0 ;i < str.length;i++) {
        if (str[i] == char){
            count ++;
        }
    }
    return count;
}

let str1 = "hello world";
let c1 = 'o';
console.log(countCharacter(str1,c1));
let str2 = "aaa bbb a";
let c2 = 'a';
console.log(countCharacter(str2,c2));
let str3 = "abc";
let c3 = 'd';
console.log(countCharacter(str3,c3));
