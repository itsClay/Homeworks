const binarySearch = function (array, target) {
  if(array.length === 0 || (array.length === 1 && array[0] !== target)) {
    return -1;
  }

  const middle = Math.floor(array.length / 2);
  if (array[middle] === target) {
    return middle;
  }
  if (target < array[middle]) {
    return binarySearch(array.slice(0, middle), target);
  }

  const upperHalf = binarySearch(array.slice(middle + 1), target);
  return (upperHalf === -1) ? -1 : upperHalf + 1 + middle;
};

console.log(binarySearch([1,2,3,4,5,6,8], 1));
