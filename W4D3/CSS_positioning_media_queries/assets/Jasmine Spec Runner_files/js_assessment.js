// Write a function, `longestSymmetricSubstring(string)`, that returns the
// longest substring that is the same forwards and in reverse (for example,
// "abba"). If two substrings are the same length, take the first one.

const longestSymmetricSubstring = function longestSymmetricSubstring(string) {

};

const is_palindrome = function (string) {

};

// Write an Array function, myEach(callback), that passes each element to
// `callback` and does not modify the original array. Do NOT call the built-in
// Array#forEach method in your implementation.
Array.prototype.myEach = function(callback) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    let res = callback(this[i]);

    if (!res === undefined){
      arr.push(res);
    }
  }
  return arr.length === 0 ? undefined : arr;
};
// console.log([1, 2, 3].myEach(console.log('hi')));

// Write an Array method, myFilter(callback), that returns an array made up of
// the elements in the original array for which `callback` returns `true`.
// Use the Array#myEach method you defined above. Do NOT call the built-in
// Array#forEach or Array#filter methods in your implementation.
Array.prototype.myFilter = function(callback) {
  const result = [];

  this.myEach( (el) => {
    if (callback(el)) {
      result.push(el);
    }
  });

  return result;
};

// Write a function `pairMatch(array, callback)`. It should return all pairs
// of indices ([i, j]) for which `callback(array[i], array[j])` returns true.

// NB: Keep in mind that the order of the arguments to the callback may matter.
// e.g., callback = function(a, b) { return a < b }
function pairMatch(array, callback) {
  for (let i = 0; i < array.length -1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      //asdf
    }
  }
}

// Write a function, `binarySearch(sortedArray, target)`, that returns the
// index of `target` in `sortedArray`, or -1 if it is not found.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.
function binarySearch(sortedArray, target) {
  if (sortedArray.length === 0) return [];
  if (sortedArray.length === 1 && sortedArray[0] !== target) return -1
  let mid = Math.floor(sortedArray.length/2);

  if (sortedArray[mid] === target) {
    return mid;
  }
  if (sortedArray[mid] > target) {
    let left = sortedArray.slice(0, mid);
    return binarySearch(left, target);
  } else {
    let right = sortedArray.slice(mid+1);
    let result = binarySearch(right, target);
    return result === -1 ? -1 : result + mid + 1;

  }

};

// write a Function method, myBind(context). It should return a copy of the
// original function, where `this` is set to `context`.
Function.prototype.myBind = function (context){
  const bindArgs = arguments.slice(1);
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};

// write a Function method, inherits(ParentClass). It should extend the methods
// of `ParentClass.prototype` to the constructor function it is called on.
Function.prototype.inherits = function(ParentClass) {
  const Surrogate = function() {};
  Surrogate.prototype = ParentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

// write a method, `myCurry(fn, object, numArgs)`, that curries the
// function. Remember that a curried function is invoked with one argument at a
// time. For example, the curried form of `sum(1, 2, 3)` would be written as
// `curriedSum(1)(2)(3)`. After `numArgs` have been passed in, invoke the
// original `fn` with the accumulated arguments, using `object` as the
// context.
function myCurry(fn, object, numArgs) {
  const args = [];
  console.log("fn: ", fn);
  console.log("obj: ", object);
  console.log("numArgs: ", numArgs);

  let _curry = (arg) => {
    args.push(arg);

    if (args.length === numArgs) {
      fn.bind(object, arg);
    } else {
      return _curry;
    }
  };

  return _curry;
}
