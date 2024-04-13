// Bài 6: Viết chương trình nhập vào giá trị
// dùng prompt trên web console
// a.	Nếu giá trị nhập vào là Employee thì hiển thị chuỗi Hello.
// b.	Còn lại nếu giá trị nhập vào là Director thì hiển thị chuỗi Greetings
// c.	Còn lại nếu giá trị nhập vào chuỗi rỗng thì hiển thị No login

// Sử dụng prompt để nhập giá trị từ người dùng
let userInput = prompt("Nhập giá trị của bạn:");

// Kiểm tra nếu giá trị nhập vào là "Employee"
if (userInput === "Employee") {
    alert("Hello");
} else if(userInput === 'Director'){
    alert('Greetings');
} else if(userInput === 'Đại'){
    alert('Xin chào');
} else if(userInput === ''){
    alert('No login');
} else{
    alert("Xin lỗi, giá trị không hợp lệ.");
}


