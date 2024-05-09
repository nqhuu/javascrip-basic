// Bài 3: Viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu

let array3 = [3,5,2,7,'h',8,'x'] 

function daoNguocMang(arr) {
    return arr.reverse()
}
let newArray3 = daoNguocMang(array3)
console.log(`Mảng sau khi đảo ngược là: ${newArray3}`);

array3.reverse();
console.log(array3);