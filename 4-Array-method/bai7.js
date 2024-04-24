
// Bài 7: cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
array = [1,5,7,8,9,15];
array2 = [...array]
// a.	 in ra các số chẵn trong mảng
let soChan = array.filter(function (item) {
    return item %2 === 0;
})
console.log(soChan);

// b.	 in ra các số lẻ  trong mảng
let soLe = array.filter(function (item) {
    return item %2 !== 0;
})
console.log(soLe);

// c.	in ra các số lớn hơn hoặc bằng 5 trong mảng
let kq = array.filter(function (item) {
    return item >=5;
})
console.log(kq);

// d.	in ra các số chia hết cho 5 trong mảng
let kq1 = array.filter(function(item){
    return item %5 === 0;
})
console.log(`Các só chia hết cho 5 trong mảng là: ${kq1}`);

// e.	 Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
let kqLonHon5 = array.filter(function(item){
    return item>5;
})

let kq2 = kqLonHon5.map(function(item){
        return item +1;
})
console.log(kq2);

// f.	dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
console.log(array.slice(3));

// g.	.splice để xóa 1 phần tử trong mảng
let xxx = array.splice(1,1)
console.log(`Phần tử bị xóa là: ${xxx}`);//phần tử bị xóa
console.log(array);

// h.	.push thêm 1 phần tử vào cuối mảng 
array.push(2);
console.log(array);

// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]
console.log(array2);
function kq3(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i]*=2;  
     }
}
kq3 (array2);
console.log(array2);