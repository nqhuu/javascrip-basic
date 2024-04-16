// Bài 8:
// Viết chương trình kiểm tra nhiệt độ:
// a.	Nhỏ hơn 20 độ C thông báo tăng nhiệt độ.
// b.	Lớn hơn 100 độ C thông báo giảm nhiệt độ
// c.	Còn lại nhiệt độ đủ dùng.

// Bài làm:
var x = 50;
if (x <= 20) {
    console.log("Tăng nhiệt độ");
} else {
    if (x >= 100) {
        console.log("Giảm nhiệt độ");
    } else {
        console.log("Nhiệt độ đủ dùng");
    }
}