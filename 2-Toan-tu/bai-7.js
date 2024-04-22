
// Bài 7: Viết chương trình nhập vào giá trị cho a và b. Tính tổng a và b, nếu tổng nhỏ hơn 4, hiển thị chuỗi Below, ngược lại hiển thị Over. Lưu ý sử dụng toán tử ?
let a = +prompt('nhập a');
let b = +prompt('nhập b');
let ketQua = ((a + b) < 4) ? 'Below' : 'Over';
alert(ketQua);

