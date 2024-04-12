// Bài 7: Cho 
array = [1,6,8,7,10 , [6,8,7,4,3,5] ,[7,4,3], 3]
// a.	Tính tổng của phần tử đầu và phần tử cuối trong array và array con 

// b.	 hãy thêm số 10 vào cuối array con và tính lại tổng trên


// Lọc ra các mảng con
const subArrays = array.filter(item => Array.isArray(item));

// Hiển thị kết quả
console.log("Các mảng con trong array:");
subArrays.forEach(subArray => console.log(subArray));
