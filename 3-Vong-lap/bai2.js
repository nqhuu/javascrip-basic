// Bài 2: cho 
let data = [3, 2, 4, 1, 8, 7, 1, 10, 1, 2]
// a.	tính tổng các phần tử trong array

let sumAll = data.reduce((prev, curren) => prev + curren, 0)
console.log(sumAll)

// b.	tính tích các phần từ trong array

let tichAll = data.reduce((prev, curren) => prev * curren, 1)
console.log(tichAll)

// c.	tính tổng các số lẻ trong array

let sumSOLe = data.reduce((prev, curren) => {
    if (curren % 2 !== 0) {
        return prev + curren;
    }
    return prev
}, 0)
console.log(sumSOLe)

// d.	tính tích các số chẵn trong array

let tichSoChan = data.reduce((prev, curren) => {
    if (curren % 2 === 0) {
        return prev * curren;
    }
    return prev
}, 1)
console.log(tichSoChan)

// e.	có mấy số 1 trong array, ở những vị trí nào
let searchNumber = 1
let count = 0;
let arrayIndex = [];
// hàm fillter sẽ chỉ trả về giá trị của mảng thỏa mã điều kiện chứ ko trả về index của các phần từ đó
data.forEach((element, index) => {
    if (element === searchNumber) {
        count++;
        arrayIndex.push(index);
    }
})
console.log(`Tổng có ${count} phẩn tử 1 trong mảng. Vị trí của chúng trong mảng là: ${arrayIndex.join(', ')}`)

// f.	số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array

console.log(`vị trí đầu của phần tử ${searchNumber} trong mảng là ${arrayIndex[0]}, vị trí cuối trong mang là ${arrayIndex[arrayIndex.length - 1]} `)