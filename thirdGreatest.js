function ThirdGreatest(strArr) { 

  // code goes here 
  let sorrtedArr = strArr.sort(function(a, b) {
    return b.length - a.length})
  return (sorrtedArr[2])
}