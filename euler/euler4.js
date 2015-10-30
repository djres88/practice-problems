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
var arrays = {
  makeStringArray: function(start, end) {
    var stringArray = [];
    for (var i=start; i <= end; i++) {
      stringArray.push(String(i));
    };
    return stringArray;
  },
  convertNumber: function(array) {
    var stringToNumArray = [];
    for (p=0; p<array.length; p++) {
      stringToNumArray.push(Number(array[p]));
    }
    return stringToNumArray;
  }
}
//First, call the make string array. For simplicity's sake, gonna assume the largest product is a six-digit number (i.e. > 333*333), though the code could also work for a start of 10,000 (i.e. 100*100).
var myArrayOfStrings = arrays.makeStringArray(100000,1000000);


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
var myPalindromeStrings = palindromes.findPalindromes(myArrayOfStrings);
// Time for a check. If you look at the value of myPalindromeStrings, you can see we're down to 900 terms. We need to convert those back to numbers.

var myPalindromeNumbers = arrays.convertNumber(myPalindromeStrings);

//Awesome! Now, I'll write a function that checks for a three-digit factor of a number, and checks whether the complement factor is also three digits.

var factors = {
  largestThreeDigitFactor: function(number) {
    var value=0;
    for(j=100; j<1000; j++) {
      if(number % j === 0) {
        //now check whether the other factor is three digits:
        if(number/j < 1000) {
          if(number/j > 99) {
            value=j;
          }
        }
      }
    }
    return value;
  }
}
//Great! now call factors on the array (largest to smalles) using a for loop.
var value = 0;
var factor1 = 0;
var factor2 = 0;
for(n=myPalindromeNumbers.length-1; value===0; n--) {
  if (n === 0) {
    value = "None found.";
  };
  var test = factors.largestThreeDigitFactor(myPalindromeNumbers[n]);
  if (test) {
    value = myPalindromeNumbers[n];
    factor1 = test;
    factor2 = myPalindromeNumbers[n]/test;
  }
}
