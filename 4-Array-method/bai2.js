// Bài 2 :
var data03 = ['Cam','Xoài','Mít','Bưởi','Quýt','Dưa gang']

// a ) Copy array data03. Bằng  … 
let newdata03 = [...data03]
console.log('newdata03:',newdata03);
// b )  Sửa phần tử “Dưa gang” thành “Dưa hấu” 

for (let i = 0; i < data03.length; i++) {
    if (data03[i] === 'Dưa gang') {
        data03[i] = 'Dưa hấu'
    }
}
console.log(data03);
// c ) Thêm “mận” vào giữa data03 . 
data03.splice(3,0,'Mận')
console.log(data03);
// d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 . 
data03.unshift('Dứa')
data03.push('Chanh')
console.log(data03);