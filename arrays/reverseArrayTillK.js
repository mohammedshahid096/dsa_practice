function reverseArray(arr, k) {
  let outputArrays = [];
  for (let i = 0; i < arr.length; i = i + k) {
    let output = arr?.slice(i, i + k).reverse();
    outputArrays.push(output);
  }
  outputArrays = outputArrays.flat();

  for (let i = 0; i < arr.length; i++) {
    arr[i] = outputArrays[i];
  }
}

let inputArray = [1, 2, 3, 4, 5];
reverseArray(inputArray, 3);
console.log(inputArray);
