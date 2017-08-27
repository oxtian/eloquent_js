function reverseArray(array) {
  var newArray = [];
  for (i=0, j=array.length; i<j; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

// reverseArray([1,2,3,4,5]);
// console.log(newArray);

function reverseArrayInPlace(array) {
  for (i=0, j=array.length; i<j; i++) {
    array.splice(i,0, array.pop());
  }
}

// var arr = [1,2,3,4,5];
// reverseArrayInPlaceFromHandsome(arr)
// console.log('arr: ',arr);
