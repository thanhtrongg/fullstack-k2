/**
 * Add a custom map2 method to Array.prototype
 * This method mimics the behavior of Array.prototype.map
 * @param {function} callback - The function to execute for each element in the array.
 * @param {any} [thisArg] - Optional. Value to use as this when executing callback.
 * @returns {Array} - A new array with each element being the result of the callback function.
 */
Array.prototype.map2 = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "This is not a function");
  }

  const arr = this;
  const length = arr.length;
  const newArr = new Array(length);

  for (let i = 0; i < length; i++) {
    if (i in arr) {
      newArr[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return newArr;
};

Array.prototype.filter2 = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + "This is not a function");
  }
  const arr = this;
  const length = this.length;
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in arr) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter2(function (number) {
  return number % 2 === 0;
});

console.log(result); // [2, 4]
