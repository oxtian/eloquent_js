// array.map
// executes that callback on every element within it, returning a new array with all of the values that the callback returned.
var tasks = [
  {
    'name'     : 'Write for Envato Tuts+',
    'duration' : 120
  },
  {
    'name'     : 'Work out',
    'duration' : 60
  },
  {
    'name'     : 'Procrastinate on Duolingo',
    'duration' : 240
  }
];

var task_names = tasks.map(function (task, index, array) {
  return task.name;
});
// ["Write for Envato Tuts+", "Work out", "Procrastinate on Duolingo"]

// array.filter
// It takes an array, and filters out unwanted elements.
var difficult_tasks = tasks.filter(function (task) {
  return task.duration >= 120;
});

// array.reduce
// takes all of the elements in an array, and reduces them into a single value
var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
  return previous + current;
}, 0); // 0 will be used as the value of previous on the first iteration
