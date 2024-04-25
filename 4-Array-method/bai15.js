/*
Bài 15: var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]
hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
// kết quả: [
{phanTu: 1, lapLai: 2},
	{phanTu: 2, lapLai: 2},
	{phanTu: 3, lapLai: 3},
	……
]
*/
// Bài làm:
var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]

// Tạo một đối tượng để lưu trữ số lần xuất hiện của từng phần tử
var counts = {};

// Đếm số lần xuất hiện của mỗi phần tử trong mảng
data.forEach(function (element) {
    counts[element] = (counts[element] || 0) + 1;
});

// Chuyển đổi đối tượng counts thành một mảng các đối tượng phần tử và số lần lặp lại
var result = Object.keys(counts).map(function (key) {
    return { phanTu: parseInt(key), lapLai: counts[key] };
});

console.log(result);