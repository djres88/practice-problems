/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
//-----------------------
/* Need a few functions:
(1) A function that converts a number to a string and reverses the string;
(2) A function that multiplies two numbers OR a function that checks the factors of a number.

Wait... take a step back... we're trying to find the largest palendrome made from the product of two 3-digit numbers. Why not model it this way: start with 999*999 and count back each side until we find a palendrome?

No, that won't work, because how would you know if, say, 999*991 is a palindrome? Can we quickly find all the products of two three-digit numbers? No, that's too many calculations.

Hmmm...

The approach where I (1) Find the palendromes and (2) Check for factors involves fewer calculations. We can create an array "reverseArray" -- the reverse of all numbers up to 1,000,000.

 Trying that first. We need two classes of functions:
*/
var stringsOfNums = {
  makeArray: function(start, end) {
    arrayOfN = [];
    for (var i=start; i <= end; i++) {
      arrayOfN.push(String(i));
    };
    return arrayOfN;
  }
}
//We're gonna assume the largest product is a six-digit number (i.e. > 333*333). Otherwise we'd need to do this for five-digit numbers as well.
var palindromes = {
  findPalindromes: function(array) {
    palindromesArray = [];
    for (k=0; k<array.length; k++) {
      var currentNum = array[k];
      if(currentNum[0]===currentNum[5]) {
        if(currentNum[1]===currentNum[4]) {
          if(currentNum[2]===currentNum[3]) {
            palindromesArray.push(currentNum);
          }
        }
      }
    }
    return palindromesArray;
  }
}
// Now call
var myPalindromes = palindromes.findPalindromes(arrayOfN);
// Can see we're down to 900 terms. In descending order, let's check for three-digit factors.

var factors = {

}
