// abcVar is undefined here
// abc is  function here

var abcVar = function () {}

// abcVar is a function here

function abc() {}

a is undefined.

var a = 0;

// ==============================================================================================================

Closure:

var a = 0;

function() {
  var b = 1;

  // what is a here? a is 0
}

// what is b here? b is undefined

function() {
  var b = 1;
  funtion() {
    var x = 1
    // what is b here? b is 1
  }
  // what is x here? x is undefined
}

for(var i=0; i<10; i++) {
  var y = 5;
}

// what is y here? y is 5

// ==============================================================================================================

function compare2Object(x,y) {
  var isEqual = false;
  // ...
}

function compare2Array(x,y) {
  var isEqual = false;
}

// IIFE (Immediately Invoked Function Expression)
(function(){
  var fuckYou = true;
})()

(function(){
  var fuckYou = 'yes';
})()
