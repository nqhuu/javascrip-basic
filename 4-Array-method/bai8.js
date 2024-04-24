/* Bài 8: cho arr [1,8,5,2,7,6,9,2,6]
dùng .sort để sắp xếp mảng tăng dần và giảm dần
Bài làm
*/
let arr = [1,8,5,2,7,6,9,2,6]
let array = arr.sort(function (a, b) {
    return a - b;
})
console.log(array)

let array2 = arr.sort(function (a, b) {
    return b-a
})
console.log(array2)