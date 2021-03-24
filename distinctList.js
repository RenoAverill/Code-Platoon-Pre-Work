function DistinctList(arr) { 

  // code goes here  
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      counter++
    }else if (arr[i] != arr[i + 1]) {
      counter === 0
    }
  }
  return counter; 
}