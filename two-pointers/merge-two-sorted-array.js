function mergeTwoArrays(arr1, arr2) {
  const result = [];
  let i = (j = 0);

  let l1 = arr1.length;
  let l2 = arr2.length;

  while (i < l1 && j < l2) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < l1) {
    result.push(arr1[i]);
    i++;
  }

  while (j < l2) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

const arr1 = [1, 3, 5, 7, 11];
const arr2 = [2, 4, 6, 8, 9, 12];
console.log(mergeTwoArrays(arr1, arr2));
