// Bài 7: Viết chương trình nhập vào giá trị cho a và b.
// Tính tổng a và b, nếu tổng nhỏ hơn 4, hiển thị chuỗi Below, ngược lại hiển thị Over. Lưu ý sử dụng toán tử ?

// Sử dụng prompt để nhập giá trị cho a và b từ người dùng
let a = +prompt("Nhập giá trị cho a:"); //+prompt: khai báo đấy là number
let b = +prompt("Nhập giá trị cho b:");

    // Tính tổng của a và b
let sum = a + b;

// Sử dụng toán tử ba ngôi để kiểm tra tổng
let result = sum < 4 ? "Below" : "Over";

// Hiển thị kết quả
alert(`${a} + ${b} = ${sum}. Kết quả: ${result}`);




