// Bài 7: Cho array = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// a.	Tính tổng của phần tử đầu và phần tử cuối trong array và array con 
// b.	 hãy thêm số 10 vào cuối array con và tính lại tổng trên

// BÀI LÀM
var array = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// a.	Tính tổng của phần tử đầu và phần tử cuối trong array và array con 
console.log(array[0]+array[array.length-1]);
var x = array[array.length-2]
// console.log(x);
console.log(x[0]+x[x.length-1]);
x.push(10)
// console.log(x);
var y =x.reduce((tong,giatri)=> tong +giatri, 0)
console.log(y);
