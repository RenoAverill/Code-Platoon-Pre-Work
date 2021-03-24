function StringScramble(str1,str2) { 

  // code goes here
  let split1 = str1.split('')
  let split2 =  str2.split('')
  let letter = ''
  for (let i = 0; i < split1.length; i++) {
    if (split1[i] == split2[0]) {
      letter+= split1[i]
      split2.shift()
    }
  }if (str2 == letter) {
    return true
  }
    return false
}