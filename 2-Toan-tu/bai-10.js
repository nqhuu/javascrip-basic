// Bài 10:
// prompt nhập password là 1 string bất kỳ
// * Nếu password để trống thì in ra ‘password không để trống’
// * Nếu password nhỏ hơn 8 ký tự hoặc password dài hơn 16 ký tự thì in ra ‘password k hợp lệ’
// * Nếu không bị những lỗi trên thì in ra password hợp lệ 

let password = prompt('Nhập mật khẩu')
let NotiPass = (password.length === 0) ? 'password không để trống' : (password.length < 8 || password.length > 16) ? 'password không hợp lệ' : 'password hợp lệ';
console.log(NotiPass);