// Bài 3: cho 
let data = [3, 2, 4, '5', 1, 8, 7, '9']
// a.	tính tổng các phần tử trong array trên

let sumAll = data.reduce((prev, current) => {
    let item = +current;
    return prev + item
}, 0)
console.log(sumAll);

// b.	hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data

let elementLe = data.filter(element => +element % 2 !== 0)
console.log(elementLe);

// c.	hãy tạo ra array3 chứa các phần tử của data theo thứ tự  đảo ngược
// kết quả [ '9', 7, 8, 1, '5', 4, 2, 3]

let daoNguoc = []
for (i = data.length - 1; i < data.length && i > -1; i--) {
    daoNguoc.push(data[i])
}
console.log(daoNguoc);