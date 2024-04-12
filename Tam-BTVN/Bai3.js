// Bài 3: Cho object user = {
// 	ten: ‘tung’,
// 	tuoi: 20
// }
// a.	hãy in ra tên và tuổi của user
// b.	hãy thêm cho user họ là ‘nguyễn’
// c.	hãy thay đổi tuổi thành 30.
// d.	Xoa tuoi khỏi object
var user = {
    	ten: "tung",
    	tuoi: 20
    }
console.log(user);
user.ho = "Nguyễn"
console.log(user);
user.tuoi = 30
console.log(user);
delete user.tuoi
console.log(user);

