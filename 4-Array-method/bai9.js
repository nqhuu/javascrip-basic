/* Bài 9:  var array = [1,3,7,8,9,0,10,3,2].; 
a.	áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  . 
b.	áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
c.	cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 
d.	cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )
e.	áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn .  
f.	 Thêm số 5 vào giữa array .
*/
// Bài làm

var array = [1,3,7,8,9,0,10,3,2]; 
// a.  áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  . 
let tangdan = array.sort(function (a, b) {
    return a - b;
})
console.log(tangdan)
// b.	áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
let b = array.map(function (params) {
   return params*2
})
console.log(b)
// c.	cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 
// Cách 1
array.unshift(1,2,3,5,1)
console.log(array)
// cách 2
array3= [1,2,3,5,1]
array.unshift(...array3)
console.log(array)
// d.	cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )
let array3= [1,2,3,5,1]
array.splice(5 , 0, ...array3)
console.log(array)
// e.	áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn .  
let e = array.filter(function (params) {
    return params%2 !==0
})
console.log(e)
let e2 = array.filter(function (params) {
    return params%2 === 0
})
console.log(e2)
// f.	 Thêm số 5 vào giữa array .
array.splice(Math.floor(array.length / 2), 0, 5);

console.log(array);
