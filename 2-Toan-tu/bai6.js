// Bài 6: Viết chương trình nhập vào giá trị dùng prompt trên web console
// a. Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
// b.	Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
// c.	Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login

// Bài làm
var giatri = "prompt"
if (giatri === "Employee") {
    console.log("Hello");
} else {if (giatri === "Director") {
    console.log("Greetings");
} else {
    console.log("No login");
}
    
}