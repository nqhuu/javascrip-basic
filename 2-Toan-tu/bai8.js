// Bài 8:
// Viết chương trình kiểm tra nhiệt độ:
// a.	Nhỏ hơn 20 độ C thông báo tăng nhiệt độ.
// b.	Lớn hơn 100 độ C thông báo giảm nhiệt độ
// c.	Còn lại nhiệt độ đủ dùng.

let DO = prompt("Độ C");
let KiemTraNhietDo = (DO) => {
    return (DO < 20) ? "Nhiệt độ đang nhỏ hơn 20, cần tăng nhiệt độ" : (DO > 100) ? "Nhiệt độ đang lớn hơn 100, cần giảm nhiệt độ": "Nhiệt độ đủ dùng"
}
alert(KiemTraNhietDo(DO));