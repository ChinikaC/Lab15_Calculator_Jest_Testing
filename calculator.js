const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const modulus = function(a, b){
    return a % b;
}

// Original answer:

// const even = function(a){
//    if (a % 2 === 0){
//     return true;
//    } else {
//     return false;
//    }
// }

// Extension 2: Refactoring code to make it DRY

const even = function(a){
   if (modulus(a, 2) == 0){
    return true;
   } else {
    return false;
   }
}

// Original answer:

// const odd = function(b){
//     if (b % 2 !== 0){
//         return true;
//        } else {
//         return false;
//        }
// }

// Extension 2: Refactoring code to make it DRY

const odd = function(b){
    if (!even(b)){
        return true;
       } else {
        return false;
       }
}

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
