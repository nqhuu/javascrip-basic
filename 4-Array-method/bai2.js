/*Bài 2 :
var data03 = ['Cam','Xoài','Mít','Bưởi','Quýt','Dưa gang']

a ) Copy array data03. Bằng  … 
b )  Sửa phần tử “Dưa gang” thành “Dưa hấu” 
c ) Thêm “mận” vào giữa data03 . 
d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 . 
 
Bài làm:
*/
data03 = ['Cam','Xoài','Mít','Bưởi','Quýt','Dưa gang']

// // a ) Copy array data03. Bằng  … 
let coppy = [...data03];
console.log(coppy);
// // // b )  Sửa phần tử “Dưa gang” thành “Dưa hấu” 
let thaythe = data03.indexOf('Dưa gang');
if (thaythe !== -1) {
    data03[thaythe] = "Dưa hấu"
}
console.log(data03)
// // c ) Thêm “mận” vào giữa data03 .
let them = Math.ceil(data03.length / 2);
data03.splice(them, 0, 'mận');
console.log(data03);
// d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 . 
data03.unshift("Dứa")
data03.push("Chanh")
console.log(data03);
