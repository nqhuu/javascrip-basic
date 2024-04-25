/* 
Bài 12: Cho array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
a.	Hãy in ra vị trí đẩu tiên xuất hiện số 7
b.	Hãy in ra vị trí cuối cùng xuất hiện số 7
c.	Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
d.	Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
e.	 Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau: là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3

Bài làm
*/
let array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
// a.	Hãy in ra vị trí đẩu tiên xuất hiện số 7
for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
   if (element === 7) {
    console.log(i) ;
    break ;
   }
}

// b.	Hãy in ra vị trí cuối cùng xuất hiện số 7
for (let i = array1.length; i >= 0; i--) {
    const element = array1[i];
    if (element === 7) {
        console.log(i) ;
        break ;
    }
}
// c.	Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
array1.sort(function (a, b) {
    return a - b
})
console.log(array1)
// d.	Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
let array2 = array1.filter(
    function (params) {
        return params >5
    }
)
console.log(array2)
// e.	 Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau: là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3
let array3 = array1.filter(
    function (params) {
        return params > 5 && (params + 2) % 3 ===0
    }
)
console.log(array3)