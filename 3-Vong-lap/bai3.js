/*
Bài 3: cho var data = [3,2,4,'5',1,8,7,'9']
a.	tính tổng các phần tử trong array trên
b.	hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
c.	hãy tạo ra array3 chứa các phần tử của data theo thứ tự  đảo ngược 
// kết quả [ '9', 7, 8, 1, '5', 4, 2, 3]

Bài làm
*/
// a.	tính tổng các phần tử trong array trên
var data = [3,2,4,'5',1,8,7,'9']
let data2 = data.map(element => {
    if (typeof element === 'string') {
        return parseFloat(element);
    } else {
        return element;
    }
});

console.log(data2);
let tonga = data2.reduce((tong, phantu) => tong + phantu, 0)
console.log ("Tổng các phần tử trong array là: " + tonga)

// b.	hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
let array2 = [];
for (let i = 0; i < data2.length; i++) {
    const element = data2[i];
    if (element%2 !== 0) {
        array2.push(element)
    }
}
console.log(array2)

// c.	hãy tạo ra array3 chứa các phần tử của data theo thứ tự  đảo ngược 
let array3 = []
for (let i = data.length - 1; i >= 0; i--) {
    const element = data[i];
    array3.push(element)
}
console.log(array3);

