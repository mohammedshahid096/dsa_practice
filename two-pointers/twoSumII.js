// Two Sum II
// using brute force
function findTargetWithBruteForce(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) {
        console.log(arr[i], arr[j], "====>", sum);
        break;
      }
    }
  }
}

function findTargetWithBruteForce2(arr, target) {
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let value = i;
    hashMap.set(key, value);
  }
  console.log(hashMap);

  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    if (hashMap.get(difference)) {
      console.log(arr[i], difference, "====>", target);
      break;
    }
  }
}

function findTargetWithTwoPointer(arr, target) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target) {
      console.log(arr[start], arr[end], "are the numbers");
      break;
    }
    if (sum < target) start++;
    if (sum > target) end--;
  }
}

// findTargetWithBruteForce([7, 11, 2, 3], 9);
// findTargetWithBruteForce2([7, 11, 2, 3], 9);

findTargetWithTwoPointer([2, 5, 1, 7, 3], 10);
