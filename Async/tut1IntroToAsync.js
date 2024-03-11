console.log(1);
console.log(2);
setTimeout(() => {
    console.log('callback function fired')
}, 2000) //this is asynchronis so it hits this and finishes up the last 2 console.logs as the 2 secs pass.
console.log(3);
console.log(4);
