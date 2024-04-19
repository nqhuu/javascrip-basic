// Bài 1: cho 
array = [1,5,7,8,9,15,8]
// a.	in ra các số chẵn của mảng
var sochan = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] %2 === 0){
        sochan.push(array[i])
    }
}
console.log(`Số chẵn trong mảng là: ${sochan}`);
console.log('Số chẵn:',sochan);

// b.	in ra các số lẻ của mảng
var sole = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] %2 !== 0){
        sole.push(array[i])
    }
}
console.log(`Số lẻ trong mảng là: ${sole}`);

// c.	in ra các số lớn hơn hoặc bằng 5 của mảng
var soLonHonBang5 = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5){
        soLonHonBang5.push(array[i])
    }
}
console.log(`Số lớn hơn hoặc bằng 5 trong mảng là: ${soLonHonBang5}`);

// d.	 Cộng tổng các số chia hết cho 5 của mảng
let sum = 0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element %5 === 0) {
        sum += element;
    }  
}
console.log(`Tổng các số chia hết cho 5 của mảng là: ${sum}`);

// e.	Tìm ra tích 3 số đầu của mảng array
const firstThreeNumber =array.slice (0,3);
console.log(firstThreeNumber);
const ketQua = firstThreeNumber.reduce((acc,number) => acc*number,1);
console.log(`Tích của 3 số đầu của mảng array là: ${ketQua}`);

// f.	Tính tổng 3 phần tử cuối của mảng

let sum3last = 0;
for (const element2 of array.slice(-3)) {
    sum3last += element2;
}
console.log("Tổng ba phần tử cuối: " + sum3last);


// g.	Tìm xem trong array có phần tử nào là số 5 không?
var timKiem = array.includes(5);
if (timKiem === true) {
    console.log(`Trong array có phần tử là số 5`);
}else{
    console.log(`Trong array không có phần tử nào là số 5`);
}

// h.	Đếm số phần tử = 8 trong mảng

function counts (arr, target){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }  
    }
    return count; 
}
const targetValue = 8;
const result = counts(array, targetValue);
console.log(`Sô phần tử ${targetValue} xuất hiện trong mảng là: ${result}`);