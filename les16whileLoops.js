// basic setup
// while( condition(s) ){
// block of code that will run if condition is true
// }

var age = 5; // this is the index variable for the loop
while (age < 11){
    console.log(`your age is ${age} which is less than 10`);
    
    age++; //this incrementer is important otherwise it will get stuck in an infinite loop and crash
}
document.write("your age is now  10");

