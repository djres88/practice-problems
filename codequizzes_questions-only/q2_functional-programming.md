#QUIZ 2: FUNCTIONAL PROGRAMMING

##Question 1
Write the $$$.map() function so the result variable is assigned to the array [4, 8, 12].
```javascript
result = $$$.map([2, 4, 6], function(num) { return num * 2;
}); console.log(result);
```

##Question 2
Write the $$$.find() function so the result variable is assigned to the string "cat".

```javascript
arr = ['ant', 'cat', 'dog']
result = $$$.find(arr, function(str) {
return str[0] === "c"; });
console.log(result);
```

##Question 3
Write the $$$.select() function so the result variable is assigned to the array [5, 7, 9].

```javascript
arr = [5, 6, 7, 8, 9];
result = $$$.select(arr, function(num) {
return num % 2 === 1; });
console.log(result);
```

##Question 4
Write the $$$.reject() function so the result variable is assigned to the array 'happy', 'joy'.
```javascript
arr = ['happy', 'snakes', 'joy', 'slippers']; result = $$$.reject(arr, function (word) { var last_letter = word[word.length - 1];
return last_letter === "s"; });
console.log(result);
```

##Question 5
Write a function that satisfies the following console.log assertions.

```javascript
var callback = function (num) { return num % 2 === 0
}
console.log($$$.all([1, 3, 4], callback) === false) console.log($$$.all([2, 6, 4], callback) === true)
```

##Question 6
Write a function that satisfies the following console.log assertions.

```javascript
var callback = function (num) { return num % 2 === 0
}
console.log($$$.any([1, 3, 4], callback) === true) console.log($$$.any([1, 11, 111], callback) === false)
```

##Question 7
Write the $$$.inject() function so the result variable is assigned to the array [1, 4, 9, 16].

```javascript
var callback = function (num) { return num * num;
}
var arr = [1, 2, 3, 4]
result = $$$.inject(arr, [], callback) console.log(result)
```
