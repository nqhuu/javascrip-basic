// Bài 6: Cho array = [1,6,8,7,6,9]
// a, array trên có bao nhiêu phần tử
// b, hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
// c, hãy thêm số 5 vào cuối array
// d, hãy thay đổi giá trị của phần tử đầu tiên và cuối cùng trong array thành số 10

// Bài Làm
var array = [1,6,8,7,6,9]
// a, array trên có bao nhiêu phần tử
console.log(array.length);
// b, hãy in ra phần tử đầu tiên và phần tử cuối cùng trong array
console.log(array[0]);
console.log(array[array.length-1]);
// c, hãy thêm số 5 vào cuối array
array.push(5)
console.log(array);
// d, hãy thay đổi giá trị của phần tử đầu tiên và cuối cùng trong array thành số 10
array[0] = 10;
array[array.length]=10;
console.log(array);