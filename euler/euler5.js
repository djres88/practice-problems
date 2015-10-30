/*QUESTION 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
/* ----------
Well, we know it's bigger than 2520. We also know that the LCD is gonna be a factor -- that is, we can start by isolating all the numbers that are divisible by 20, starting with 2520 and going up to X.


We also don't need to check anything less than 11: if a number is divisible by 16, then it is also divisible by 8. More generally, if you're looking to find whether a number *n* is divisible by factors up to *x*, you only need to start counting at *x/n*. So let's also start by creating a function that only checks the factors we actually need to check
*/
var maths = {
  //check whether a given number is divisible by factors up to x:
  divisibleBy: function(number, factorsUpTo) {
    var start = Math.round(factorsUpTo/2);
    var isDivisible = true;
    for(i=start; i<=factorsUpTo; i++) {
      if(number % i != 0) {
        isDivisible = false;
      }
    }
    return isDivisible;
  }
};
//Now I can start the count at 2520 and go up by 20 until we find a *maths.divisibleBy* that returns true.
var testNums = function(start, countBy) {
  var firstFit = 0;
  for(var n=start; firstFit===0; n+=countBy) {
    if(maths.divisibleBy(n, countBy)) {
      firstFit = n;
    }
  }
  return firstFit;
}

testNums(2520, 20);
-->232792560
// took a while to run...
