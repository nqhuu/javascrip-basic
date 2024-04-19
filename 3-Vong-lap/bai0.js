// Bài 0: Cho mảng 
arr = [1, 4, 5, 2, 7, 9, 4];
// Hãy sắp xếp mảng theo thứ tự tăng dần và giảm dần

let tangdan = arr.sort(function(a,b){
    return a-b;
})
console.log(`Mảng tăng dần: ${tangdan}`);

let giamdan = arr.sort(function(a,b){
    return b-a;
})
console.log(`Mảng giảm dần: ${giamdan}`);


