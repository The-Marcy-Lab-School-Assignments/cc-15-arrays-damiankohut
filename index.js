//write your code here
//declare a function with a parameter
//retrun the first longest string in the arrray 

var long1= 0;



function longestString(arr){
  for (let i=0; i<arr.length; i++){
      if (arr[i].length > long1){
        long1= arr[i].length;
      }

  }
  return long1;
}
console.log(longestString(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]))

function findLongestWord(arr) {
  let longest;
  let length = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length
            longest = arr[i]
        }
    } 
    return longest
}
console.log(findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]))