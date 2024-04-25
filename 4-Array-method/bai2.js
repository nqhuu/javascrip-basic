// Bài 2 :
let data03 = ['Cam', 'Xoài','Dưa gang', 'Mít', 'Bưởi', 'Quýt', 'Dưa gang']

// a ) Copy array data03. Bằng  …

let data4 = [...data03]
console.log(data4);

// b )  Sửa phần tử 'Dưa gang' thành 'Dưa hấu'

data4.forEach((item, index) => {
    if (item === 'Dưa gang') {
        data4[index] = 'Dưa hấu'
    }
})
console.log(data4);

// c ) Thêm 'mận' vào giữa data03 .

data03.splice(Math.ceil(data03.length / 2), 0, 'mận')
console.log(data03);

// d ) Thêm 'Dứa' vào đầu của data03 và 'Chanh'  vào cuối data03 . 

data03.unshift('Dứa');
data03.push('Chanh')
console.log(data03);