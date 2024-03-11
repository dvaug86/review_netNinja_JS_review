// //basic set up
// // function nameOfFunction(a,b){
//     // 
//     // code block where something is  to be executed
// // }

// //nameOfFunction() calls  that function
function getAverage (a, b){
    var avg = (a + b)/2;
    console.log(avg)
    return avg; //this sets result 
}
const myResult = getAverage(7,12); //7 is a and 12 is b
console.log( `the average is ${myResult}`)
//that return getAverage allows us to now have that average assigned to myResult

