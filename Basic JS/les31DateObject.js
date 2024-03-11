var myDate = new Date();
console.log(myDate);

//year, month, day, hours, minutes, seconds
//if day is greater than it should be i.e. 32 it rolls over into the next month. 01/32 will show up 02/01
var myFutureDate = new Date(1545, 0, 32, 10, 30, 15);
console.log(myFutureDate);


var birthday = new Date(1985, 0, 15, 11, 15, 25);
var birthday2 = new Date(1985, 0, 15, 11, 15, 25);
console.log(birthday);
console.log(birthday2);

//get month of the date(0-11); 
console.log(birthday.getMonth());

// get the full year 
console.log(birthday.getFullYear());

//get the date of the month (1-31)
console.log(birthday.getDate());

// get the day of the week (0-6) 0 is sun
console.log(birthday.getDay());

//get the hour of the date(0-23)
console.log(birthday.getHours());

//get the number of milliseconds since 1st Jan 1970
//we use this for comparison purposes
console.log(birthday.getTime());

 if(birthday== birthday2){
    console.log("birthdays are equal");
 }else{
    console.log("birthdays aren't equal")
 }
 //wont show up equal bc 2 different objects.
//however if we use the getTime method then they will
if(birthday.getTime()== birthday2.getTime()){
    console.log("birthdays are equal");
 }else{
    console.log("birthdays aren't equal")
 }