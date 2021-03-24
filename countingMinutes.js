function CountingMinutes(str) { 

  // code goes here
  let hours = 0
  let minuets = 0
  let secondHours = 0
  let secondMinuets = 0
  let splitStr = str.split('-')
  for (let i = 0; i < splitStr.length; i++) {
    if (i == 0) {
      let time = (splitStr[i].slice(splitStr[splitStr.length - 2], -2))
      if (splitStr[i][splitStr[i].length - 2] == 'p') {
        secondHours -= 12
      }
      hours += Number(time.slice(0, time.length - 3))
      minuets += Number(time.slice(time.length - 2))
    }else if ( i == 1) {
      let secondTime = (splitStr[i].slice(splitStr[splitStr.length - 2], -2))
      secondHours += 24
      secondHours += Number(secondTime.slice(0, secondTime.length - 3))
      secondMinuets += Number(secondTime.slice(secondTime.length - 2))
    }
  }return ((secondHours - hours) * 60 +(secondMinuets - minuets))
}