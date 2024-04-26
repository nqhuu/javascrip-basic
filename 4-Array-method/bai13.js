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
    while (!check) {
        let fruitName = fruit.filter(item => item.ten.toUpperCase() === name)
        console.log(fruitName)
        if (fruitName.length === 0) {
            confirm('hoa quả bạn tìm hiện không có trên hệ thống bạn có muốn chọn lại')
            console.log(confirm);
            if (!confirm) {
                alert('Cảm ơn bạn đã ghé thăm gian hàng')
                check = true;
                // break;
            } else if (confirm) {
                name = prompt('tìm hoa quả').trim().toUpperCase()
            }
        } else {
            check = true;
            return fruitName.join()
        }
    }
}
let input = prompt('tìm hoa quả').trim().toUpperCase()
let showFruit = findName(input, hoaQua);
console.log(showFruit);


// d.	Viết function lọc sản phẩm hoa quả  theo Nước .   