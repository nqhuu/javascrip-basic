// Bài 10: Cho 
array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
// a.	Xóa phần tử cuối cùng và in lại array
array2.pop();
console.log(array2);
// b.	Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
array2.unshift(12)
console.log(array2);
// c.	Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
array2.splice(2,4)
console.table(array2);
// d.	Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array
console.log(`Gía trị tại vị trí thứ 3 là: ${array2[3]}`);
console.log(`Gía trị tại vị trí thứ 7 là: ${array2[7]}`);