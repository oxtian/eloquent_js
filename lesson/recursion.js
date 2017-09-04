// Recursion is a function that calls itself

var newList = [];
var list = [1,2,3,4,5];

function addToNewList(list) {
  // if list.length is 0, do nothing.
  // if list.length > 0, pop 1 item and add to new list.

  if(list.length > 0) {
    newList.push(list.pop());
    addToNewList(list);
  }
}


// a^b => a & b
// 6, 3
function power(base, exponent) {
  if(exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

1: base 6, exponent 3
    return 6 * power (6,2);
2: base 6, exponent 2
    return 6 * power (6,1);
3: base 6, exponent 1
    return 6 * power(6,0);
4: base 6, exponent 0
    return 1;
5: (3) return 6 * 1;
    return 6;
6: (2) return 6 * 6;
    return 36;
7: (1) return 6 * 36;
    return 196;
8: function return 196


var base = 6;
for(var i=0; i<exponent; i++) {
  base *= base;
}
