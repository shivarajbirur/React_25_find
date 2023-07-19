var num = [10, 15, 20, 30, 40, 51];

//Reduce
var sum = num.reduce(function (accumulator, currentNumber) {
  console.log("accumulator - " + accumulator);
  console.log("currentNumber - " + currentNumber);

  return accumulator + currentNumber;
});

console.log("Final sum : " + sum);

var sum2 = 0;

num.forEach(function (currentNumber) {
  sum2 += currentNumber;
});

console.log("Final sum with ForEach : " + sum2);
