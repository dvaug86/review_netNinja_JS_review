
//variables maxSpeed and driver are the properties methods wont be called in that initial function in creating the object
var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed*time + " miles travled")
    };
    this.logDriver = function(){
        console.log("the drivers name is " + this.driver)
    };
}

var myCar = new Car(70, 'a');
var myCar2 = new Car(30, 'b');
var myCar3 = new Car(40, 'c');
var myCar4 = new Car(50, 'd');
var myCar5 = new Car(60, 'e');

myCar.drive(30, 5);
myCar4.logDriver();