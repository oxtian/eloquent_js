function isEven(number) {
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else if (number < 0) {
    return undefined;
  } else {
    number = number - 2;
    return isEven(number);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
