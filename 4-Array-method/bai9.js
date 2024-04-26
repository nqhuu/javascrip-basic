// Bài 9:  
var array = [1, 3, 7, 8, 9, 0, 10, 3, 2];
// a.	áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  . 

let newArray = array.sort((a, b) => a - b);
console.log(newArray);

// b.	áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 

let newArray2 = array.map(item => item * 2);
console.log(newArray2);

// c.	cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 

let array3 = [1, 2, 3, 5, 1];
// let array4 = array3.concat(array);
let array4 = [...array3, ...array]
console.log(array4)

array.unshift(...array3);
console.log(array);

// d.	cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )

array.splice(5, 0, ...array3);
console.log(array)

// e.	áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn .  



// f.	 Thêm số 5 vào giữa array .

array.splice(Math.floor(array.length / 2), 0, 5);
console.log(array);
