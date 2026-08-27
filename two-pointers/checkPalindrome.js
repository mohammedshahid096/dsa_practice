function checkPalindromeArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

console.log(checkPalindromeArray([1, 2, 3, 2, 1]));
// true

console.log(checkPalindromeArray([1, 2, 3, 4, 1]));
// false

console.log(checkPalindromeArray([1, 2, 3, 2, 1]));
// true

console.log(checkPalindromeArray([1, 2, 2, 1]));
// true

console.log(checkPalindromeArray([1, 2, 3, 4, 5]));
// false

console.log(checkPalindromeArray([1, 2, 3, 4, 1]));
// false

console.log(checkPalindromeArray([1]));
// true

console.log(checkPalindromeArray([]));
// true

console.log(checkPalindromeArray([1, 1]));
// true

console.log(checkPalindromeArray([1, 2]));
// false

console.log(checkPalindromeArray([5, 4, 3, 4, 5]));
// true
