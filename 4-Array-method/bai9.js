// Bài 9:  
var array = [1,3,7,8,9,0,10,3,2]; 
// a.	áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần  . 
let tangdan = [...array].sort(function(a,b){
    return a-b;
})
console.log(`a/tăng dần: ${tangdan}`);


let giamdan = [...array].sort(function(a,b){
    return b-a;
})
console.log(`a/giảm dần: ${giamdan}`);
// b.	áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
let newArray = array.map(function(item){
    return item*=2;
})
console.log('newArray:' ,newArray);
// c.	cho 
array3= [1,2,3,5,1];
// hãy thêm array3 vào phía trước của array và in ra kết quả . 
let arrC = array3.concat(array)
console.log(`c: ${arrC}`);
// d.	cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng array.splice )
array.splice(5,0,...array3);
console.log(`d: ${array}`);

// e.	áp dụng array.filter lọc ra các phần tử lẻ , các phẩn tử chẵn .  
let soChan = array.filter(function(item){
    return item%2=== 0;
});
console.log(soChan);

let soLe = array.filter(function(item){
    return item%2 !== 0;
})
console.log(soLe);
// f.	 Thêm số 5 vào giữa array .
array.splice(1,0,5);
console.log(array);