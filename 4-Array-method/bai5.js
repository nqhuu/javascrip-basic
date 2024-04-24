/*
Bài 5:
var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]
// viết function có đầu vào là 2 array và return tổng các thành phần
// dùng concat và sort nối 2 mảng và sắp xếp chúng

Bài làm
*/
function tongCacPhanTu(list1, list2) {
  // Nối hai mảng lại với nhau
  var list = list1.concat(list2);

  // Sắp xếp mảng kết hợp
  list.sort(function(a, b) {
      return a - b;
  });
  // Tính tổng các phần tử trong mảng kết hợp
  var sum = list.reduce(function(total, currentValue) {
      return total + currentValue;
  }, 0);
  
  return sum;
}
var list1 = [3, 6, 7, 9, 5];
var list2 = [3, 5, 7, 8, 6, 6, 7];

console.log(tongCacPhanTu(list1, list2));