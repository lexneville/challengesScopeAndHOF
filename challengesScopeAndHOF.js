// //-------------------- CHALLENGE 1 -------------------------------------

// let hello = () => {
//     console.log("Hello Code Nation!")
// }
// let count = () => {
//     console.log(i)
// }
// let timesFive = (fn) => {
//     for (i = 0; i < 5; i++) {
//       //hello()
//         fn();
//     }
// }
// timesFive(hello);
// timesFive(count);

// //------------------- CHALLENGE 2 -------------------------------------

// let fiveNum = [12, 45, 3, 52, 490];
// let threeNum = [34, 54, 87]

// const timesThree = (fn) => {
//     const map1 = fn.map(x => x * 3);
//     console.log(map1);
// }

// timesThree(fiveNum);
// timesThree(threeNum);

// //---------------------- CHALLENGE 3 --------------------------------------

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

console.log(doMaths(56)(45, subtract));
console.log(doMaths(56)(45, add));
console.log(doMaths(56)(45, multiply));
console.log(doMaths(56)(45, divide));

