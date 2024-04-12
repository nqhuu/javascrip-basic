// Bài 2: Tạo một object chứa thông tin của bản thân:
	// ví dụ: 
let human = {
    Name: "",
    gender: "Male",
}

let human2 = {
    Name: 'Mr.H',
    age: 20
}
// a.	Thêm từ 1 - 5 thuộc tính về bản thân.
// b.	Sử dụng console.log() để xem kết quả.
// c.	Truy vấn từng giá trị của đối tượng đã tạo.
// d.	Đổi các value thành thông tin của người bên cạnh.
// e.	Thêm key “ethnic”(dân tộc) vào đối tượng và gán cho giá trị cụ thể.
// f.	Console.log() chuỗi bất kỳ chứa tất cả thông tin đã tạo trước đó.

human.age = 18;
human.address = 'Nam Định'
human.Name = human2.Name
human.ethnic = 'Kinh'
console.log(human)
console.log(`họ tên: ${human.Name}, ${human.age} tuổi`)