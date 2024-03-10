//this keyword refers to the object that owns the space.
//in the example below it is in the myCar2 object so this refers to myCar2


var myCar2 = {
    maxSpeed: 70,
    driver: "me",
    drive: function (speed, time) {
      console.log(speed*time +" Miles driven");
    },
    logDriver: function(){
        console.log("driver name is " + this.driver);
    }
  };
  myCar2.logDriver();