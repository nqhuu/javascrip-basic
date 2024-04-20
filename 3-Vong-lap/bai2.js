// Bài 2: cho var 
data = [3,2,4,1,8,7,1,10,1,2]
// a.	tính tổng các phần tử trong array
var sumData = data.reduce((tong,value) => tong+value,0)
console.log(`Tổng các phần tử trong array là: ${sumData}`);

// b.	tính tích các phần từ trong array
var accData = data.reduce((acc,value) => acc*value,1)
console.log(`Tích các phần tử trong array: ${accData}`);

// c.	tính tổng các số lẻ trong array
let sumLe = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i] %2 !== 0) {
        sumLe += data[i];
    }
}
console.log(`Tổng các số lẻ có trong array là: ${sumLe}`);

// d.	tính tích các số chẵn trong array
let accChan = data.reduce ((acc,value) =>{
    if (value %2 === 0) {
        return acc*value ;
    }
    return acc;
} ,1);
console.log(`Tích các số chẵn trong array là: ${accChan}`);

// e.	có mấy số 1 trong array, ở những vị trí nào

function findOnesIndex(arr) {
    const ones = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            ones.push(i);
        }
    }
    return ones;
}

const OnesIndex = findOnesIndex(data);
console.log(OnesIndex);

console.log(`Tổng cộng có ${OnesIndex.length} số 1 trong mảng.`);
console.log(`Các vị trí của số 1 trong mảng là: ${OnesIndex.join(', ')}`);


// f.	số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array

let firstOne = data.indexOf(1);
let lastOne = data.lastIndexOf(1);
console.log(`Số 1 đầu tiên xuất hiện ở vị trí số: ${firstOne}`);
console.log(`Số 1 cuối cùng xuất hiện ở vị trí số: ${lastOne}`);


