// Bài 7: Viết function có đầu vào là 1 array
// Function trả ra đoạn string chứa các giá trị bên trong array đầu vào
let array7 = [1,5,7,8,9]
function taoChuoiTuMang(array) {
    return array.join(',')
}

let string = taoChuoiTuMang(array7);
console.log(string);