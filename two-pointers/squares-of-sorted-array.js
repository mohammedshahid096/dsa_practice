/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let neg = [];
  let pos = [];

  for (let i = 0; i < nums.length; i++) {
    let square = nums[i] * nums[i];
    if (nums[i] < 0) neg.push(square);
    else pos.push(square);
  }

  if (neg.length === 0) {
    return pos;
  } else if (pos.length === 0) {
    return neg.reverse();
  }

  neg.reverse();

  // now same logic for merge two arrays
  let i = 0,
    j = 0;

  let l1 = neg.length,
    l2 = pos.length;

  let result = [];

  while (i < l1 && j < l2) {
    if (neg[i] <= pos[j]) {
      result.push(neg[i]);
      i++;
    } else if (neg[i] > pos[j]) {
      result.push(pos[j]);
      j++;
    }
  }

  while (i < l1) {
    result.push(neg[i]);
    i++;
  }
  while (j < l2) {
    result.push(pos[j]);
    j++;
  }

  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
