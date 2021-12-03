let array = [100, 50, 5, 3, 2, 5, 70, 80, 4, 30, 1]

function swap(index1, index2, array) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionSort(array){
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    swap(minIndex, i, array);
  }
}

selectionSort(array)
console.log(array)
