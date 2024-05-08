// Bài  13:    
var  hoaQua = [
	{ten:'Xoài',sx:'China',sl:'100'},
	{ten:'Xoài',sx:'VietNam',sl:'130'},
	{ten:'Xoài',sx:'ThaiLan',sl:'100'},
	{ten:'Cam',sx:'China',sl:'200'},
	{ten:'Cam',sx:'ThaiLan',sl:'150'},
	{ten:'Nho',sx:'VietNam',sl:'120'},
	{ten:'Xoài',sx:'ThaiLan',sl:'100'},
]
// a.	Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . 
let vietNam = hoaQua.filter(function(item){
    return item.sx === 'VietNam';
})
console.log('a. Các trái cây có nơi sx tại VietNam là: ' ,vietNam);
// b.	Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 
let soluong150 = hoaQua.filter(function(item){
	return item.sl >=150;
})
console.log('b. Các trái cây có số lượng lơn hơn hoặc bằng 150 là:', soluong150);
// c.	Viết function lọc sản phẩm hoa quả  theo tên  .
function locTheoTen(tenCanTim){
	return hoaQua.filter((traiCay) => traiCay.ten.toLowerCase() === tenCanTim.toLowerCase())
} //toLowerCase chuyển đổi từ khóa thành chữ thường (in thường)
let ten = 'xoài'
// let ten = prompt ("Nhập tên quả cần tìm")
let ketQuaLocTen = locTheoTen(ten);
console.log(`Các sản phẩm có tên ${ten} là:`);
console.table(ketQuaLocTen);
// let kq = JSON.stringify(ketQuaLoc) // chuyển Object về string
// alert(kq)
// alert(ketQuaLoc)

// let findName = (name, fruit) => {
//     let check = false;
//     let ketQua = [];
//     let khongCoHang = []
//     while (!check) {
//         let fruitName = fruit.filter(item => item.ten.toUpperCase() === name)
//         if (fruitName.length === 0) {
//             let returnUser = confirm('hoa quả bạn tìm hiện không có trên hệ thống bạn có muốn chọn lại')
//             if (!returnUser) {
//                 // alert('Cảm ơn bạn đã ghé thăm gian hàng')
//                 khongCoHang.push('Cảm ơn bạn đã ghé thăm gian hàng')
//                 alert(khongCoHang)
// 				check = true;
//                 // break;
//             } else {
//                 name = prompt('tìm hoa quả').trim().toUpperCase()
//             }
//         } else {
//             check = true;
//             ketQua = fruitName;
//         }
//     }

//     if (ketQua.length > 0) {
//         return ketQua;
//     } else {
//         return khongCoHang
//     }
// }
// let input = prompt('tìm hoa quả').trim().toUpperCase()
// let showFruit = findName(input, hoaQua);
// if(typeof showFruit[0] === 'string'){
//     console.log(...showFruit);

// } else {
//      console.log(`Đây là danh sách các loại ${showFruit[0].ten} có sãn trong kho`)
//      showFruit.forEach(element => {
//         console.log(`${element.sx}, số lượng ${element.sl}`)
//     });    
// }


// d.	Viết function lọc sản phẩm hoa quả  theo Nước 

function locTheoNuoc(nuocCanTim){
	return hoaQua.filter((traiCay) => traiCay.sx.toLowerCase() === nuocCanTim.toLowerCase())
} //toLowerCase chuyển đổi từ khóa thành chữ thường (in thường)
let sx = 'China'
// let ten = prompt ("Nhập tên quả cần tìm")
let ketQuaLocNuoc = locTheoNuoc(sx);
console.table(`Các sản phẩm được sản xuất tại ${sx} là:`);
console.table(ketQuaLocNuoc);


//
