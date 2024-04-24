/*
Bài 7: cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
a.	 in ra các số chẵn trong mảng
b.	 in ra các số lẻ  trong mảng
c.	in ra các số lớn hơn hoặc bằng 5 trong mảng
d.	in ra các số chia hết cho 5 trong mảng
e.	 Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
f.	dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
g.	.splice để xóa 1 phần tử trong mảng
h.	.push thêm 1 phần tử vào cuối mảng 

* dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]
Bài làm
*/
let array = [1,5,7,8,9,15]
// a.	 in ra các số chẵn trong mảng
// b.	 in ra các số lẻ  trong mảng
Cách 1: dùng filter
let sochan = array.filter(function (params) {
    return params%2 === 0
})
console.log(sochan)
// Cách 2 dùng map
let sole = array.map(function(params) {
    if (params%2 !== 0) {
        return params;
    }
})
console.log(sole)
let sole2 = sole.filter(function (params) {
    return params%2 !== 0
})
console.log(sole)

// c.	in ra các số lớn hơn hoặc bằng 5 trong mảng
let arr = array.filter(function (params) {
    return params >= 5
})
console.log(arr)

// d.	in ra các số chia hết cho 5 trong mảng
let arrd = array.filter(function (params) {
    return params%5 === 0
})
console.log(arrd)
// e.	 Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
let arre = array.map(function (params) {
    if (params > 5) {
        return params +1
    } else {
       return params
    }
})
// console.log(arre)
// f.	dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
let arrf = array.slice(2)
console.log(arrf)
// g.	.splice để xóa 1 phần tử trong mảng
array.splice(2, 1)
console.log(array)
// h.	.push thêm 1 phần tử vào cuối mảng 
array.push(5)
console.log(array)

// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]
 for (let i = 0; i < array.length; i++) {
    const element = array[i];
    array[i] =  element*2
 }
 console.log(array)