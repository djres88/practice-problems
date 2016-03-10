
##Question 1
What does the following code print to the console?

```javascript
function dog () {};
console.log(dog.name);
```


##Question 2
What does the following code print to the console?

```javascript
var boo = function () {};
console.log(boo.name);
```


##Question 3
￼￼￼￼￼Write a recursive factorial function and then verify that the factorial of 4 equals 24.


##Question 4
What does the following code print to the console?

```javascript
var happy = {
  hi: function sing(n, result) {
    result = typeof result !== 'undefined' ? result : [];
    if (n == 0) {
      result.push("No more bottles");
      return result;
    }
    var str = n + " bottles";
    result.push(str);
    return sing(n - 1, result);
  }
}

console.log(happy.hi(3));
```


##Question 5
```javascript
function dinero () {};
dinero.meaning = "money"; console.log(dinero.meaning);
```


##Question 6
Describe what happens when the Helpers.factorial(3) function is run twice.

```javascript
var Helpers = {
  cache: {},
  factorial: function (n) {
    if (this.cache[n]) { return this.cache[n]; }; var counter = 1;
    var result = 1;
    while (counter <= n) {
      result *= counter;
      counter++;
    }
    this.cache[n] = result;
    return result;
  }
}

Helpers.factorial(3);
Helpers.factorial(3);
```


##Question 7
Write a function called biggestArg() that takes a variable number of integer arguments and returns the largest integer. biggestArg(1, 3, 33, 4) should return 33.


##Question 8
Write a function called mergeObjects() that takes a variable number of objects as parameters and returns a single object with all the properties from the individual objects. mergeObjects({some: "thing"}, {cool: "jerk", phat: "cow"}, {holy: "moly"}) should return {some: "thing", cool: "jerk", phat: "cow", holy: "moly"}.


##Question 9
```javascript

```

##Question 10
```javascript

```


##Question 11
```javascript

```


##Question 12
```javascript

```


##Question 13
```javascript

```


##Question 14
```javascript

```


##Question 15
```javascript

```


##Question 16
```javascript

```


##Question 17
```javascript

```


##Question 18
```javascript

```


##Question 19
```javascript

```
