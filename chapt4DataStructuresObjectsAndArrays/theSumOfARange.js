var numberArray = [];

function range (start, end, step) {
  if (step >= 0) {
    for (i=start; i<=end; i=i+(step)) {
      numberArray.push(i);
    }
  } else if (step < 0) {
    for (i=start; i>=end; i=i+(step)) {
      numberArray.push(i);
    }
  }
  return numberArray;
}

var total = 0;

function sum (numArray) {
  for (i=0; i<numArray.length; i++) {
    var x = numArray[i];
    total = total + x;
  }
  return total;
}

console.log(sum(range(1,10,1)));
// answer -> 55
console.log(sum(range(5,2,-1)));
// answer -> 14
