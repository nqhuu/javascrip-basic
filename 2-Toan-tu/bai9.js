// Bài 9: cho array = [3,5,4,9,8,1,10]
// a.	hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
// b.	hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối  // 3 + 20

// Bài làm
var array = [3,5,4,9,8,1,10]
// a.	hãy tính tổng của phần tử đầu và phần tử cuối // 3 + 10
console.log(array[0]+array[array.length-1]);
// b.	hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối  // 3 + 20
array.push(20)
console.log(array);
console.log(array[0]+array[array.length-1]);
