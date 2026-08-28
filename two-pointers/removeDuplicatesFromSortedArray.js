function removeDuplicatesFromSortedArray(arr) {
  let slow = 0;
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[slow] !== arr[fast]) {
      slow++;
      arr[slow] = arr[fast];
      console.log(arr);
    }
  }
}

let inputArray = [1, 1, 2, 2, 3, 4, 4];
removeDuplicatesFromSortedArray(inputArray);
