// Bài 2: var x = 2a.	var a = 8 + x++ + ++x - --x + x++ + 7b.	
// var b = 5 + ++x + ++x + --x - x-- - ++x  + 10c.	
// var c = 1 + x-- + --x - ++x + --x - 11
// a,b,c có giá trị là bao nhiêu ?

// Bài làm
var x = 2
// var a = 8 + x++ + ++x - --x + x++ + 7
// =8+2+4-3+3+7
// var b = 5 + ++x + ++x + --x - x-- - ++x  + 10
//=5+3+4+3-3-3+10
var c = 1 + x-- + --x - ++x + --x - 11
// =1+2+0-1+0-11
// console.log(a);
// console.log(b);
console.log(c);