for (i = 0; i < 10; i++) {
  
  if (i === 5 || i===3) {
    //continue is like a weak break. it won't execute the code block if condition is met but will 
    //continue with loop. in this case we wont see 3 and 5
    continue;
  }

  console.log(i);

//break breaks you out of a loop

  if (i === 7) {
    break;
  }
}
console.log("i have broken out of the loop");




