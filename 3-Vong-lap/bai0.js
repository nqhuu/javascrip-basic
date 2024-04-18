// Bài 0: Cho mảng arr = [1, 4, 5, 2, 7, 9, 4].

// Hãy sắp xếp mảng theo
// thứ tự tăng dần và giảm dần

//  Bài làm
// Hãy sắp xếp mảng theo
var arr = [1, 4, 5, 2, 7, 9, 4]
var tangDan = arr.slice().sort(function(a, b) {
    return a - b;
});

console.log("Mảng sắp xếp tăng dần: " + tangDan);

// thứ tự tăng dần và giảm dần
 
var arr = [1, 4, 5, 2, 7, 9, 4]
var tangDan = arr.slice().sort(function(a, b) {
    return b - a;
});

console.log("Mảng sắp xếp giảm dần: " + tangDan);