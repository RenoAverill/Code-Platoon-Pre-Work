function LetterChanges(str) { 

  // code goes here
  /*
      1) replace each solo letter with the letter next in the alphabet
      2) declare variable for answer
      3) loop through str for each letter
      4) if specicial char or letter, -leave it be
      5) replace each solo letter with the letter next in the alphabet
      6) return answer
  */
  let answer = ''
  for (let i = 0; i < str.length; i++) {
    let secondLetterCode = str.charCodeAt(i) + 1
    let secondLetter = String.fromCharCode(secondLetterCode)
    if (str[i] == 1 ||
    str[i] == 2 ||
    str[i] == 3 ||
    str[i] == 4 ||
    str[i] == 5 ||
    str[i] == 6 ||
    str[i] == 7 ||
    str[i] == 8 ||
    str[i] == 9 ||
    str[i] == 0 ||
    str[i] == '!' ||
    str[i] == '@' ||
    str[i] == '#' ||
    str[i] == '$' ||     
    str[i] == '%' ||
    str[i] == '^'||
    str[i] == '&' ||
    str[i] == '*' ||
    str[i] == '-' ||
    str[i] == '+') {
      answer+= str[i]
    }
    else if (secondLetter == 'a' ||
    secondLetter == 'e' ||
    secondLetter == 'i' ||
    secondLetter == 'o' ||
    secondLetter == 'u') {
      let upperVowel = secondLetter.toUpperCase()
      answer+= upperVowel
    }
    else {
      answer+= secondLetter
    }
  }
  return answer;
}