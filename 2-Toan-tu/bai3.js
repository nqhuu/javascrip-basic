// Bài 3: var x = 5a.	
// var a = 5 + x++ + 10b.	
// var b = 5 + ++x +10c.	
// var c = 5 + x-- + 10d.	
// var d = 5 + --x +10
// a, b, c, d có giá trị là bao nhiêu?

// Bài làm
var x = 5
var a = 5 + x++ + 10
//a=5+5+10 =20(x=6)
var b = 5 + ++x +10	
//b= 5+7+10=22 (x=7)
var c = 5 + x-- + 10	
//c=5+7+10=22 (x=6)
var d = 5 + --x +10
//d=5+5+10=20 (x=5)
console.log(a);
console.log(b);
console.log(c);
console.log(d);