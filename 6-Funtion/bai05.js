// Bài 5: Viết function có đầu vào là 1 string
// 	function trả ra string mới sau khi đã loại bỏ khoảng trống thừa ở đầu và ở cuối string
// 	ví dụ:
string = '     hello mọi người     '  //=> newString = ‘hello mọi người’

function loaiBoKhoangTrang(array) {
    return string.trim();
}
let newString = loaiBoKhoangTrang(string);
console.log(string);
console.log(newString);