/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

//First, forget elegance of code for now (e.g. "Let's count onlt odd numbers!"). Just find the soloution.

//First we're gonna need a bunch of primes -- let's say everything up to 300425737571 (that's 600,851,475,143 / 2, rounded down), just to be safe. Recall that a prime is a number with no factors other than itself and one.

// Say you have a number -- 10,001. How do you check whether that number is prime? You would cycle through all numbers i less than HALF 10001, checking whether (10001/2) % i === 0. So let's set that up.
var number = 100001;
var notPrime = "";
var factors = [];
var primes = [];
for (var i = 2; i < Math.round(number/2); i++) {
  //if EVER our number has a factor:
  if(number % i === 0) {
    notPrime = "notPrime";
    factors.push(i);
  };
};
if (notPrime != "notPrime") {
  primes.push(number);
};
--> 2
console.log(factors);
--> [11, 9091]
console.log(primes);
--> []

//The next step is to generalize this into a function so that I can use it as we count up to 300 billion. Let's make the function isPrime:
function isPrime(number) {
  //remove the vars to access for testing
  notPrime = "";
  factors = [];
  primes = [];
  for (var i = 2; i < Math.round(number/2); i++) {
    if(number % i === 0) {
      notPrime = "notPrime";
      factors.push(i);
    };
  };
  if (notPrime != "notPrime") {
    primes.push(number);
  };
}
// Let's test isPrime(20415348091) in the console:
isPrime(20415348091);
console.log(primes);
// Okay, that broke the console, but the function works for smaller numbers. Hmmm... Maybe we want to store this and switch to finding the FACTORS of our number, then checking whether any of these factors are prime.

//So let's write a function to find the factors of a given number. I can kinda use the code from before; I didn't need the factors then, but I wanted to use them for testing. Let's find the factors other than 1 and the number:
function factors(number) {
  factorsOfNumber = [];
  for(var i = 2; i < number; i++) {
    if(number % i === 0) {
      factorsOfNumber.push(i);
    }
  }
  return factorsOfNumber;
}
//Awesome! Now let's try that out on a big number and see if we can't not break the console.
factors(100507893);
--> [3,17,51,1970743,5912229,33502631]
//Cool! Now let's try the really big number -- or half of it, anyway. Here goes nothin...
factors(600851475143);
//dang... What's the workaround here? We can test the smallest numbers manually, I guess, although that's not ideal. How about we stop the code when we get to a sufficiently high factor (set the limit at 10,000, say), then break the factors into chunks?
function factorsChunk(number) {
  factorsOfNumber = [];
  for (var i = 2; i < 10000; i++) {
    if(number % i === 0) {
      factorsOfNumber.push(i);
    }
  }
  return factorsOfNumber;
};
factorsChunk(600851475143);
--> [71, 839, 1471, 6857]
//NOW we're getting somewhere... the smallest factor is 71, so we don't need to look for anything bigger than 600851475143/71, right? That should cut things down at least a little. Maybe we can run our regular factors function?
600851475143/71
--> 8462696833;
// That could be manageable. Let's try calling the regular factors function again, but this time we "only" need to count up to 8462696833.
function factors(number) {
  factorsOfNumber = [];
  for(var i = 2; i < 8462696833; i++) {
    if(number % i === 0) {
      factorsOfNumber.push(i);
    }
  }
  return factorsOfNumber;
}
factors(600851475143);
// Still timing out. Okay, so we can figure out the last four factors pretty easily with these first four. Maybe we can get away with just dividing by 6857 and counting up to that.
600851475143/6857
--> 87625999;
//Let's try running the factors one more time, but this time "only" count to 87625999.
function factors(number) {
  factorsOfNumber = [];
  for(var i = 2; i < 87625999; i++) {
    if(number % i === 0) {
      factorsOfNumber.push(i);
    }
  }
  return factorsOfNumber;
}
factors(600851475143);
--> [71, 839, 1471, 6857, 59569, 104441, 486847, 1234169, 5753023, 10086647]
// Success! Remember that we need to add in the first four, though:
factorsOfNumber.push(600851475143/71)
factorsOfNumber.push(600851475143/839)
factorsOfNumber.push(600851475143/1471)
factorsOfNumber.push(600851475143/6857)
--> [71, 839, 1471, 6857, 59569, 104441, 486847, 1234169, 5753023, 10086647, 87625999, 408464633, 716151937, 8462696833]

// NOW let's finally get back to the primes part of the problem. Recall the isPrime function (I removed the part where I was logging factors):
function isPrime(number) {
  notPrime = "";
  primes = [];
  for (var i = 2; i < Math.round(number/2); i++) {
    if(number % i === 0) {
      notPrime = "notPrime";
    };
  };
  if (notPrime != "notPrime") {
    primes.push(number);
  };
}
// Let's write a for loop that cycles through our array of factors (factorsOfNumber) and returns only the primes:
for(var n = 0; n < factorsOfNumber.length; n++) {
  isPrime(factorsOfNumber[n]);
}
return primes;
//Flippin dammit the console broke again. Okay, so we need something smaller than the last number in the array. Let's just test the small ones first and the larger ones individually... No... There must be some key nugget about primes/factors that I don't know and/or am forgetting -- OH WAIT it's that we never need to search for factors higher than the square root when we're looking for primes! Dammit! Because as soon as you hit the square root you'll start cycling back to numbers that were already searched with the smaller factor! That would've made this problem much easier from the get-go... Let's amend the isPrime function to reflect this:
function isPrime(number) {
  notPrime = "";
  primes = [];
  for (var i = 2; i < Math.sqrt(number); i++) {
    if(number % i === 0) {
      notPrime = "notPrime";
    };
  };
  if (notPrime != "notPrime") {
    primes.push(number);
  };
}
//Then we need to loop through the array factorsOfNumber.
for (var n = 0; n < factorsOfNumber.length; n++) {
  isPrime(factorsOfNumber[n]);
}

//Which isn't working. Sigh... could it be that the primes variable is stuck in the isPrime function? No... it's accessible from without. This problem won't STOP with the issues... isPrime(number) works, but not in the for-loop. If I do:
isPrime(factorsOfNumber[0]);
console.log(primes);
--> [71]
//Which is great. But the function doesn't work inside the for-loop. Why? Okay, but this DOES work:
for (var n = 0; n < factorsOfNumber.length; n++) {
  isPrime(factorsOfNumber[0]);
  --> [71];
// SOOOO strange. So we've isolated the problem to the "n" variable in the factorsOfNumber; apparently we can't treat that as a variable. Let's try this as a fix:
for (var n = 0; n < factorsOfNumber.length; n++) {
  var primeTest = Number(factorsOfNumber[n]);
  isPrime(primeTest);
}
//Nope... And it's not the size of the larger numbers, because this doesn't work, either:
for (var n = 0; n < 5; n++) {
  primeTest = factorsOfNumber[n];
  isPrime(primeTest);
}
// You know what? We're just gonna create a whole new loop for this. The isPrime function just won't work off an array in a for-loop for some reason. Gotta ask Matt why this isn't working.
factorsOfNumber = [71, 839, 1471, 6857, 59569, 104441, 486847, 1234169, 5753023, 10086647, 87625999, 408464633, 716151937, 8462696833];
var primes = [];
for (var i = 0; i < factorsOfNumber.length; i++) {
  var test = "prime"
  var number = factorsOfNumber[i];
  for (var j = 2; j < Math.sqrt(number); j++) {
    if (number % j === 0) {
      test = "not a prime"
    }
  }
  if (test === "prime") {
    primes.push(number);
  }
}
console.log(primes);
--> [71, 839, 1471, 6857]
// HOORAY! Yeesh. 6857. 
