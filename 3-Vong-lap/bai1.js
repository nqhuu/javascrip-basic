// Bài 1: cho 
let array = [1, 5, 7, 8, 9, 15, 8];

// a. in ra các số chẵn của mảng
let arrayChan = array.filter(item => item % 2 === 0);
console.log(arrayChan);

// b. in ra các số lẻ của mảng

let arrayLe = array.filter(item => item % 2 !== 0);
console.log(arrayLe);

// c. in ra các số lớn hơn hoặc bằng 5 của mảng

let arrayGreater5 = array.filter(item => item >= 5);
console.log(arrayGreater5);

// d.  Cộng tổng các số chia hết cho 5 của mảng

let sumDivisible5 = array.reduce((prev, current) => {
    if (current % 5 === 0) {
        return prev + current;
    }
    return prev;
}, 0);

console.log(sumDivisible5);
// e. Tìm ra tích 3 số đầu của mảng array

let count = 3;
let tich3SoDau = array.reduce((prev, curren, index) => {
    if (index < count) {
        return prev * curren
    }
    return prev
}, 1)
console.log(tich3SoDau);

// f. Tính tổng 3 phần tử cuối của mảng

let indexArray3 = array.length - 4;
console.log(indexArray3);
let sum3ElementLast = array.reduce((prev, current, index) => {
    if (index > indexArray3) {
        return prev + current
    }
    return prev
}, 0);
console.log(sum3ElementLast);

// g. Tìm xem trong array có phần tử nào là số 5 không?

let searchElement5 = array.some(item => item === 5)
if (searchElement5 === true) {
    console.log('Có phần tử bằng 5 trong mảng');
} else {
    console.log('Không có phần tử bằng 5 trong mảng');
};

// h. Đếm số phần tử = 8 trong mảng

let count8 = 0;
let countElement8 = array.forEach(item => {
    if (item === 8) {
        count8 += 1;
    };
});
console.log(`Số phần từ bằng 8 có trong mảng là : ${count8}`);