// add solution here


//1 Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.
function theBeatlesPlay(musiciansArr, instrumentsArr) {
  
  var arr = [];
  
  for (let i = 0; i < musiciansArr.length; i += 1) {
    
    var str = `${musiciansArr[i]} plays ${instrumentsArr[i]}`;
    arr.concat(arr, str);
    
  }
  
  return arr;
}