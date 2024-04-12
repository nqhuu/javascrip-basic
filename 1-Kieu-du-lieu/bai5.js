// Bài 5.1:
var x = [1,3,5];
x[0] = x[2]; // [5,3,5]
x[1] = x[0]; // [5,5,5]
console.log(x);
// Bài 5.2: 
	var x = [1,3,5];
var y = [0,5,7];
x[0] = x[1] + y[2];
y[1] = y[2] - x[0];
console.log(x, y); 
// Bài 5.3: 
var x = [1,3,5,8];
x[0] = x[x.length-1];
console.log(x);
//x  [8 3 5 8]
// Bài 5.4: 
	var x = [1,3,5,8];
var temp = x[x.length-1];  
x[x.length-1] = x[0]; 
x[0] = temp; 
console.log(x);