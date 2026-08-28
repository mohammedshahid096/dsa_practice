function moveZeros(arr) {
  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
      console.log(arr, "i :", i, "Insert Position :", insertPos);
    }
  }

  for (let i = insertPos; i < arr.length; i++) {
    arr[i] = 0;
  }
}

let array = [0, 1, 0, 3, 12];
moveZeros(array);
