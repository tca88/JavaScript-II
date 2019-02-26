// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

/////////////////////////////

// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
// }

//ANSWER

function getLength(arr, cb) {
  return cb(arr.length)
}

function lengthCallback (arrLength) {
  console.log(arrLength);
}

// Function invocation

getLength(items, lengthCallback);

/////////////////////////////

// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
// }

//ANSWER

function last(arr, cb) {
  return cb(arr[arr.length-1]);
}

function lastNameCallback(lastItem) {
  console.log(lastItem);
}

// Function invocation

last(items, lastNameCallback);

/////////////////////////////

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

//ANSWER

function sumNums(x, y, cb) {
  return cb(x + y);
}

function sumCallback(sum) {
  console.log(sum);
}

// Function invocation

sumNums(2, 3, sumCallback);

/////////////////////////////

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }

//ANSWER

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

function multiplyCallback(multiplication) {
  console.log(multiplication);
}

// Function invocation

multiplyNums(4, 4, multiplyCallback);

/////////////////////////////

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
// }

//ANSWER

function contains(item, list, cb) {
  return cb(list.includes(item));
}

function containsItemCallback(result) {
  console.log(result);
}

contains("Pencil", items, containsItemCallback);

/////////////////////////////

/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
// }
