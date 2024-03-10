var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
//the new Object() is what makes myCar an object

myCar.maxSpeed = 50;
myCar.driver = "David";
// this is assigning properties to my car
console.log(myCar.driver);
//this will display David

//same with functions
myCar.drive = function () {
  console.log("now driving");
};
myCar.drive();

var myCar2 = {
  maxSpeed: 70,
  driver: "me",
  drive: function (speed, time) {
    console.log(speed*time +" Miles driven");
  }
};
 myCar2.drive(50, 3);