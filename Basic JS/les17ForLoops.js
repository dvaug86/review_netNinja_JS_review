//basic format
//for(index variable; condition; incrementer ){

// }

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {
  console.log("this is link number" + i);
}
document.write("all links now looped");
