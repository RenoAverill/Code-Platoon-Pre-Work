function PalindromeTwo(str) { 

  // code goes here 
  let reversedStr = ''
  let myArray = str.split('')
  for (let i = 0; i < str.length; i++) {
    reversedStr+= myArray.pop()
  }
  if (reversedStr == str) {
    return true
  }
  return false
}