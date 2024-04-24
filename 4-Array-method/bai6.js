/*
Bài 6: var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// in ra các phần tử bị trùng nhau

Bài làm:
*/
var data = [1,2,3,1,2,3,4,5,6,5,4,6]
function phanTuTrung(data) {
    var counts = {}; // Đối tượng để lưu trữ số lần xuất hiện của từng phần tử

    // Lặp qua mảng và đếm số lần xuất hiện của mỗi phần tử
    data.forEach(function(item) {
        if (counts[item]) {
            counts[item] += 1;
        } else {
            counts[item] = 1;
        }
    });

    // Lọc ra các phần tử có số lần xuất hiện lớn hơn 1
    var duplicates = Object.keys(counts).filter(function(key) {
        return counts[key] > 1;
    });

    return duplicates;
}

console.log(phanTuTrung(data)); 