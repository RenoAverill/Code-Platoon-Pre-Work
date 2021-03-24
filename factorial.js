function FirstFactorial(num) { 

  // code goes here 
  let i = 1
  let answer = 1
  while (i < num + 1) {
    answer*= i
    i++
  } 
  return answer; 

}