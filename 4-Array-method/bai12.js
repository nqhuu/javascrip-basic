// Bài 12: Cho 
array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
// a.	Hãy in ra vị trí đẩu tiên xuất hiện số 7
let firstIndex = array1.indexOf(7);
// console.table(array1);
console.log(`Vị trí đầu tiên xuất hiện số 7 là: ${firstIndex}`);

// b.	Hãy in ra vị trí cuối cùng xuất hiện số 7
let lastIndex = array1.lastIndexOf(7);
console.log(`Vị trí cuối cùng xuất hiện số 7 là: ${lastIndex}`);

// c.	Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
let tangDan = array1.sort(function(a,b){
    return a-b;
})
console.log(tangDan);


let giamDan = array1.sort(function(a,b){
    return b-a;
})
console.log(giamDan);
// d.	Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
let array2 = array1.filter(function(item){
    return item >5;
})
console.log(array2);
// e.	 Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau: là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3

let array3 = array1.filter(function(item){
    return item >5 & (item + 2)%3 === 0;
})
console.log(array3);


//
