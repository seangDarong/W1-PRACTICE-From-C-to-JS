//simulate a voting system for 3 candidate (A,B,C)
//count the vote and declair the winner 
function votingSystem(array){
    let numA = 0;
    let numB = 0;
    let numC = 0;
    

    if (array.length === 0){
        return "There is no winner yet!";
    }

    for (let i = 0 ;i < array.length ;i++){
        let vote = array[i].toUpperCase();
        if (vote === 'A'){
            numA++;
        }else if(vote === 'B'){
            numB++;
        }
        else if (vote === 'C'){
            numC++;
        }
    }
    if (numA > numB && numA > numC){
        return "A is a Winner!";
    }else if(numB > numA && numB > numC){
        return "B is a Winner!";
    }else if (numC > numA && numC > numB){
        return "C is a Winner!";
    }else if(numA === numB && numA === numC){
        return " It is a tie A B and C have the same number of vote!";
    }else if(numA === numB){
        return "Both A and B is a Winner!";
    }else if(numB === numC){
        return "Both B and C is a Winner!";
    }else if(numA === numC){
        return "Both A and C is a Winner!";
    }
}
let vote1 = ['A', 'B', 'A', 'C', 'A'];
console.log(votingSystem(vote1));
let vote2 = ['A', 'B', 'B', 'C', 'A'];
console.log(votingSystem(vote2));
let vote3 = [];
console.log(votingSystem(vote3));