function CaesarCipher(str,num) { 

  // code goes here
  let answer = ''
  if (num == 0) {
    return str
  }  
  for ( let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      answer+= ' '
    }else {
      answer+= (String.fromCharCode(str[i].charCodeAt() + num))
    }
  }
  return answer
}