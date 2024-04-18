// Bài 10:
// prompt nhập password là 1 string bất kỳ
// * Nếu password để trống thì in ra ‘password không để trống’
// * Nếu password nhỏ hơn 8 ký tự hoặc password dài hơn 16 ký tự thì in ra ‘password k hợp lệ’
// * Nếu không bị những lỗi trên thì in ra password hợp lệ

// Bài làm

function checkPassword(password) {
if (password === "") {
    console.log("password không để trống");
} else {
    if (password.length <8 || password.length > 16 ) {
        console.log("password k hợp lệ");
    } else {
        console.log("password hợp lệ");
    }
    }
}

var password = "minhtam"
checkPassword(password);
