// Bài 3: Cho 
var user = {
	ten: 'tung',
	tuoi: 20
}
// a.	hãy in ra tên và tuổi của user
// b.	hãy thêm cho user họ là ‘nguyễn’
// c.	hãy thay đổi tuổi thành 30.
// d.	Xoa tuoi khỏi object

console.log(`Tên: ${user.ten} ${user.tuoi} tuổi`);
user.ho = 'nguyễn';
user.tuoi = 30,
delete user.tuoi;
console.log(user);