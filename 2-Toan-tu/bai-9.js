// Bài 9: cho 
let array = [3, 5, 4, 9, 8, 1, 10]
// a.	hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
let sumFirstLast = array[0] + array[array.length - 1]
console.log(sumFirstLast);
// b.	hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối  // 3 + 20
array.push(20);
sumFirstLast = array[0] + array[array.length - 1]
console.log(sumFirstLast);