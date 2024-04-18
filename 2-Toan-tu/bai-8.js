// Bài 8:
// Viết chương trình kiểm tra nhiệt độ:
// a.	Nhỏ hơn 20 độ C thông báo tăng nhiệt độ.
// b.	Lớn hơn 100 độ C thông báo giảm nhiệt độ
// c.	Còn lại nhiệt độ đủ dùng.

let input = +prompt("Nhập nhiệt đô (độ C)");
let output = (input <= 20) ? "tăng nhiệt độ" : (input >= 100) ? "Giảm nhiệt độ" : "Nhiệt độ đủ dùng"
alert(output);