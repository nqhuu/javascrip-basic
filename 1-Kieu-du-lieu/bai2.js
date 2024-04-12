// Bài 2: Tạo một object chứa thông tin của bản thân:
// 	ví dụ: var human = {
//     			name: "",
//     			gender: "Male",
//     			// ....
// }
// a.	Thêm từ 1 - 5 thuộc tính về bản thân.
// b.	Sử dụng console.log() để xem kết quả.
// c.	Truy vấn từng giá trị của đối tượng đã tạo.
// d.	Đổi các value thành thông tin của người bên cạnh.
// e.	Thêm key “ethnic”(dân tộc) vào đối tượng và gán cho giá trị cụ thể.
// f.	Console.log() chuỗi bất kỳ chứa tất cả thông tin đã tạo trước đó.

var human = {
    name: 'Đại',
    gender: 'Male',
    age: 33,
    address: 'Nam Định',
    department: 'Đơn Hàng',
    workplace: 'Hồng Phúc Glass',
}
console.log(human);
console.log(human.name);
console.log(human.gender);
console.log(human.age);

human.name = 'Linh';
human.age = 36;
console.log(human);
human.ethnic = 'Kinh';
console.log(human);
console.log(`Tôi tên là ${human.name} ${human.age} tuổi, tôi đến từ ${human.address}. Hiện tại tôi đang làm việc tại phòng ${human.department} công ty ${human.workplace}`);