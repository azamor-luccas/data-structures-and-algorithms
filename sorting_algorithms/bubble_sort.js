let array = [100, 50, 5, 3, 2, 5, 70, 80, 4, 30, 1]

function swap(index1, index2, array) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array){
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        swap(j, j+1, array);
      }
    }
  }
}

bubbleSort(array)
console.log(array)
