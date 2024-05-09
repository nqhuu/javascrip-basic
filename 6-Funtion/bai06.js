// Bài 6: Viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới
// 	VD 20 05 2015 => 20-05-2015
let string6 = '20 05 2015';
function replace(string) {
    return string6.replace(/ /g, '-')
}

let newString6 = replace(string6);
console.log(newString6);