/* Bài 10: Cho array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
a.	Xóa phần tử cuối cùng và in lại array
b.	Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
c.	Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
d.	Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array

Bài Làm
*/
let array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5];
// a.	Xóa phần tử cuối cùng và in lại array
array2.splice(array2.length - 1, 1)
console.log(array2)
// b.	Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
array2.unshift(12)
console.log(array2)
// c.	Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
array2.splice(2, 4)
console.log(array2)
// d.	Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array
for (let i = 3; i < 8; i++) {
    const element = array2[i];
   console.log(element)

}
