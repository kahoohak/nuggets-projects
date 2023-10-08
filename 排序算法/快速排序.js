function quickSort(arr) {
  if(arr.length < 2) {
    return arr
  } else {
    let pivot = arr[0], left = [], right = []
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] <= pivot) {
        left.push(arr[i])
      }
      if(arr[i] > pivot) {
        right.push(arr[i])
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
}

const res = quickSort([6, 4, 7, 2, 1, 9, 10, 8, 3, 5])
console.log(res)