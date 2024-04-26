// Bài  13:    
var hoaQua = [
    { ten: 'Xoài', sx: 'China', sl: '100' },
    { ten: 'Xoài', sx: 'VietNam', sl: '130' },
    { ten: 'Xoài', sx: 'ThaiLan', sl: '100' },
    { ten: 'Cam', sx: 'China', sl: '200' },
    { ten: 'Cam', sx: 'ThaiLan', sl: '150' },
    { ten: 'Nho', sx: 'VietNam', sl: '120' },
    { ten: 'Xoài', sx: 'ThaiLan', sl: '100' },
]
// a.	Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . 

// let madeInVietNam = hoaQua.filter(item => item.sx === 'VietNam')
// console.log(madeInVietNam)

// b.	Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 

// let quantity = hoaQua.filter(item => item.sl >= 150)
// console.log(quantity)

// c.	Viết function lọc sản phẩm hoa quả  theo tên  .  

let findName = (name, fruit) => {
    let check = false;
    let ketQua = [];
    let khongCoHang = []
    while (!check) {
        let fruitName = fruit.filter(item => item.ten.toUpperCase() === name)
        if (fruitName.length === 0) {
            let returnUser = confirm('hoa quả bạn tìm hiện không có trên hệ thống bạn có muốn chọn lại')
            if (!returnUser) {
                // alert('Cảm ơn bạn đã ghé thăm gian hàng')
                khongCoHang.push('Cảm ơn bạn đã ghé thăm gian hàng')
                check = true;
                // break;
            } else {
                name = prompt('tìm hoa quả').trim().toUpperCase()
            }
        } else {
            check = true;
            ketQua = fruitName;
        }
    }

    if (ketQua.length > 0) {
        return ketQua;
    } else {
        return khongCoHang
    }
}
let input = prompt('tìm hoa quả').trim().toUpperCase()
let showFruit = findName(input, hoaQua);
console.log(`${showFruit}`);
// if (showFruit.length !== 0) {
//     Object.keys(showFruit).forEach(element => {
//         console.log(`sản xuất tại: ${element.sx}, số lượng trong kho: ${element.sl} `)
//     });
// };

// d.	Viết function lọc sản phẩm hoa quả  theo Nước .   