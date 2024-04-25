// Bài 5:
var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]
// viết function có đầu vào là 2 array và return tổng các thành phần
// dùng concat và sort nối 2 mảng và sắp xếp chúng
let sumList = (l1,l2) =>{
    let list3 = (l1.concat(l2)).sort((a,b)=> a-b);
    let sumAll = list3.reduce((prv, current) =>{
        return prv+current;
    })
    
    return `Sắp tăng dần xếp mảng như sau:${list3} với tổng là: ${sumAll}`
}
console.log(sumList(list1,list2));