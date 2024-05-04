const userConfirmed = confirm("Bạn có chắc chắn muốn thực hiện hành động này không?");
if (userConfirmed) {
    // Thực hiện hành động khi người dùng xác nhận
    console.log("Người dùng đã xác nhận.");
} else {
    // Thực hiện hành động khi người dùng hủy bỏ
    console.log("Người dùng đã hủy bỏ.");
}
