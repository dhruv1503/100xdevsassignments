/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const startTime = Date.now();
   let i = 1;
   let sum = 1
    while(i <= n){
     sum += i;
     i++
    }

    const endTime = Date.now();
    return (parseFloat((endTime - startTime) / 1000)).toFixed(3)
}
// console.log(calculateTime(100000000)) // 0.130 sec
// console.log(calculateTime(1000000000)) // 0.951 sec
// console.log(calculateTime(10000000000)) // 10.152 sec
// console.log(calculateTime(100000000000)) // 108.003 sec