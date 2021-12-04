let array = [100, 50, 5, 3, 2, 5, 70, 80, 4, 30, 1]

function swap(index1, index2, array) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function insertionSort(array){
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > array[j + 1]) swap(j, j + 1, array)
    }
  }
}

insertionSort(array)
console.log(array)
