#QUIZ 3: FUNCTION INVOCATION

##Question 1
What does the following code print to the console?
```javascript
￼￼￼￼
result = function surfer() { return this === window;
}(); console.log(result);
```


##Question 2
What does the following code print to the console?
```javascript
phone = {
  ring: function () {
    return this === phone;
  }
}
console.log(phone.ring());
```


##Question 3
What does the following code print to the console?
```javascript
hat = function () {
  return this;
}

obj1 = {
  check: hat
}
obj2 = {
  check: hat
}

console.log(obj1 === obj1.check())
console.log(obj2 === obj2.check())
```


##Question 4
￼￼￼￼What does the following code print to the console?
```javascript
function Builder () {
  this.self = function () {
    return this;
  }
}
b = new Builder(); console.log(b.self() === b);
```


##Question 5
￼￼￼￼What does the following code print to the console?
```javascript
dude = {
  greet: "hi",
  bye: "peace"
}

function a () {
  return this.greet + ", " +
  this.bye;
}

console.log(a.apply(dude));
```


##Question 6
What does the following code print to the console?
```javascript
function full_name (first, last) {
  return first + " " + last + ": " + this.age;
}

shredder = {
  age: 37
}

console.log(full_name.apply(shredder, ["evil", "badguy"]));
```


##Question 7
What does the following code print to the console?
```javascript
function sum (x, y) {
  return this.name + ", the sum is " + (x + y);
}

person = {
  name: "Phil"
}

console.log(sum.call(person, 2, 2));
```


##Question 8
Use the teamCity() function and teams array to create the following array ['Giants from New York', 'Seahawks from Seattle'].

```javascript
function Team(name, city) {
  this.name = name;
  this.city = city;
}

teams = [
new Team("Giants", "New York"), new Team("Seahawks", "Seattle")
]

function teamCity () {
  return this.name + " from " + this.city;
}
```


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
