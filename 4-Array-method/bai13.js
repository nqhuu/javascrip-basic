/* 
Bài  13:    
var  hoaQua = [
	{ten:”Xoài”,sx:”China”,sl:”100”},
	{ten:”Xoài”,sx:”VietNam”,sl:”130”},
	{ten:”Xoài”,sx:”ThaiLan”,sl:”100”},
	{ten:”Cam”,sx:”China”,sl:”200”},
{ten:”Cam”,sx:”ThaiLan”,sl:”150”},
{ten:”Nho”,sx:”VietNam”,sl:”120”},
{ten:”Xoài”,sx:”ThaiLan”,sl:”100”},
]
a.	Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . 
b.	Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 
c.	Viết function lọc sản phẩm hoa quả  theo tên  .  
d.	Viết function lọc sản phẩm hoa quả  theo Nước .   
*/
// Bài làm :
 
// let hoaQua = [
//     { ten: "Xoài", sx: "China", sl: "100" },
//     { ten: "Xoài", sx: "VietNam", sl: "130" },
//     { ten: "Xoài", sx: "ThaiLan", sl: "100" },
//     { ten: "Cam", sx: "China", sl: "200" },
//     { ten: "Cam", sx: "ThaiLan", sl: "150" },
//     { ten: "Nho", sx: "VietNam", sl: "120" },
//     { ten: "Xoài", sx: "ThaiLan", sl: "100" }
// ];

// a.	Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . +
// Cách 1:
let hoaquavn = hoaQua.filter( VN => VN.sx === "VietNam");
console.log(hoaquavn);
// Cách 2
let hoaquavn2 = hoaQua.filter(
    function (params) {
       return params.sx === "VietNam" 
    }
)
console.log(hoaquavn2);

// b.	Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 
let soluonglon = hoaQua.filter( soluong => soluong.sl >= 150)
console.log (soluonglon)
// c.	Viết function lọc sản phẩm hoa quả  theo tên  .  
function name2 (hoaQua2, tensp) {
    return hoaQua2.filter( sanpham => sanpham.ten === tensp)
}
let hoaQua2 = [
    { ten: "Xoài", sx: "China", sl: "100" },
    { ten: "Xoài", sx: "VietNam", sl: "130" },
    { ten: "Xoài", sx: "ThaiLan", sl: "100" },
    { ten: "Cam", sx: "China", sl: "200" },
    { ten: "Cam", sx: "ThaiLan", sl: "150" },
    { ten: "Nho", sx: "VietNam", sl: "120" },
    { ten: "Xoài", sx: "ThaiLan", sl: "100" }
];
let hoaqua2 = name2 (hoaQua2, "Xoài") ;
console.log(hoaqua2) ;

// d.	Viết function lọc sản phẩm hoa quả  theo Nước .   

function name3 (hoaQua3, tenspnuoc) {
    return hoaQua3.filter( sanpham => sanpham.sx === tenspnuoc)
}
let hoaQua3 = [
    { ten: "Xoài", sx: "China", sl: "100" },
    { ten: "Xoài", sx: "VietNam", sl: "130" },
    { ten: "Xoài", sx: "ThaiLan", sl: "100" },
    { ten: "Cam", sx: "China", sl: "200" },
    { ten: "Cam", sx: "ThaiLan", sl: "150" },
    { ten: "Nho", sx: "VietNam", sl: "120" },
    { ten: "Xoài", sx: "ThaiLan", sl: "100" }
];
let hoaquad = name3 (hoaQua3, "VietNam") ;
console.log(hoaquad) ;
