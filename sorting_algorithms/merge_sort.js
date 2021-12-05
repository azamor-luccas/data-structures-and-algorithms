let array = [100, 50, 5, 3, 2, 5, 70, 80, 4, 30, 1]

function swap(index1, index2, array) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  const middleIndex = (array.length + array.length%2)/2;
  let left = array.splice(0, middleIndex);
  let right = array;

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let mergedArray = [];
  let mergedArrayLength = 0;
  const total = left.length + right.length;
  
  // left index
  let i = 0;
  // right index
  let j = 0;
  while(mergedArrayLength < total){
    if (left[i] === undefined) {
      mergedArray.push(right[j]);
      mergedArrayLength++;
      j++;
    } else if (right[j] === undefined) {
      mergedArray.push(left[i]);
      mergedArrayLength++;
      i++;
    } else if (left[i] <= right[j]) {
      mergedArray.push(left[i]);
      mergedArrayLength++;
      i++;
    } else {
      mergedArray.push(right[j]);
      mergedArrayLength++;
      j++;
    }
  }

  return mergedArray;
}

console.log(array);
let sorted = mergeSort(array)
console.log(sorted)
