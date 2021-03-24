function LongestWord(sen) { 

  // code goes here
  for (let x of sen) {
    if (x.includes('!') || x.includes('&')) {
      sen = sen.replace('&', '').replace('!', '')
    }
  }
  sen = sen.split(' ')
  let answer = ''
  let i = 0
  while (i < sen.length) {
    if (sen[i].length > answer.length) {
      answer = sen[i]
    }
    i++
  }return answer; 
}