//WEEK 3 EXC. 9
//Logic Challenge - Mencari Mean

function cariMean(arr) {
// you can only write your code here!
let div = arr.length;
var addition = 0;
var display = 0;
for (i=0;i<div;i++){
    addition += arr[i];
};
display = Math.round(addition/div);
return display;
};
  
// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7