// Bài 3: Cho object 
user = {
	ten: 'tung',
	tuoi: 20
}
// a.	hãy in ra tên và tuổi của user
console.log(user.ten)

// b.	hãy thêm cho user họ là ‘nguyễn’
console.log(user.tuoi)

// c.	hãy thay đổi tuổi thành 30.
user.tuoi = 30;
console.log(user.tuoi)

// d.	Xoa tuoi khỏi object
delete user.tuoi
console.log(user)
