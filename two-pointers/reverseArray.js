function reverseAnArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let tempValue = arr[start];
    arr[start] = arr[end];
    arr[end] = tempValue;

    start++;
    end--;
  }
}

// 1. Normal odd-length array
let array1 = [1, 2, 3, 4, 5];
reverseAnArray(array1);
console.log(array1);
// Expected: [5, 4, 3, 2, 1]

// 2. Normal even-length array
let array2 = [1, 2, 3, 4, 5, 6];
reverseAnArray(array2);
console.log(array2);
// Expected: [6, 5, 4, 3, 2, 1]

// 3. Two elements
let array3 = [10, 20];
reverseAnArray(array3);
console.log(array3);
// Expected: [20, 10]

// 4. One element
let array4 = [100];
reverseAnArray(array4);
console.log(array4);
// Expected: [100]

// 5. Empty array
let array5 = [];
reverseAnArray(array5);
console.log(array5);
// Expected: []

// 6. Duplicate values
let array6 = [1, 2, 2, 3, 3, 4];
reverseAnArray(array6);
console.log(array6);
// Expected: [4, 3, 3, 2, 2, 1]

// 7. Negative numbers
let array7 = [-1, -2, -3, -4, -5];
reverseAnArray(array7);
console.log(array7);
// Expected: [-5, -4, -3, -2, -1]

// 8. Mixed positive and negative numbers
let array8 = [-5, 10, -2, 7, 3];
reverseAnArray(array8);
console.log(array8);
// Expected: [3, 7, -2, 10, -5]

// 9. Already reversed array
let array9 = [5, 4, 3, 2, 1];
reverseAnArray(array9);
console.log(array9);
// Expected: [1, 2, 3, 4, 5]

// 10. Same values
let array10 = [7, 7, 7, 7];
reverseAnArray(array10);
console.log(array10);
// Expected: [7, 7, 7, 7]
