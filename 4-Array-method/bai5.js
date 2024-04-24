// Bài 5:
var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]
// viết function có đầu vào là 2 array và return tổng các thành phần
// dùng concat và sort nối 2 mảng và sắp xếp chúng

let list = list1.concat(list2)
console.log(list);

let sum = 0;
for (let i = 0; i < list.length; i++) {
    sum += list[i];
}
console.log(`Tổng các thành phần có trong array là: ${sum}`);

let tangdan = list.sort(function(a,b){
    return a-b;
})
console.log(tangdan);

let giamdan = list.sort(function(a,b){
    return b-a;
})

console.log(giamdan);