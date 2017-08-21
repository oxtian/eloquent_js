/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
 */      

function min (number1, number2) {
  if (number1 < number2) {
    return number1;
  } else {
    return number2;
  }
}

// console.log(min(1, 4));
// console.log(min(3, 7));                                                                                                                                                                                                                                                                                                                                                                                          