// Bài 8: cho 
arr = [1,8,5,2,7,6,9,2,6]
// dùng .sort để sắp xếp mảng tăng dần và giảm dần
let tangDan = arr.sort(function(a,b){
    return a-b;
})
console.log(tangDan);


let giamDan = arr.sort(function(a,b){
    return b-a;
})
console.log(giamDan);
