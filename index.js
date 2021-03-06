const sumItems = function(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      sum = sum + sumItems(item);
    } else {
      sum = sum + item;
    }
  }
  return sum;
};

module.exports = sumItems;
