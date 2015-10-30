var fibonacci = {
  fibonacciNumbers: function(upTo) {
    var a = 0;
    var b = 1;
    var fibonacciArray = [];
    for (var i=0; (a+b)<=upTo; i++) {
      fibonacciArray.push(a+b);
      a = b;
      b = fibonacciArray[i];
    }
    return fibonacciArray;
  }
};

var maths = {
  isEven: function(array) {
    var arrayOfEvens = [];
    for(var x=0; x<array.length; x++) {
      if(array[x] % 2 === 0) {
      arrayOfEvens.push(array[x]);
      }
    }
    return arrayOfEvens;
  },
  sumArray: function(array) {
    var arraySum = 0;
    for(var n=0; n<array.length; n++) {
      arraySum += array[n];
    }
    return arraySum;
  }
}

maths.sumArray(maths.isEven(fibonacci.fibonacciNumbers(4000000)))
