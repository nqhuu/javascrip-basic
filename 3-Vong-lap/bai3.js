// Bài 3: cho var 
data = [3,2,4,'5',1,8,7,'9']
// a.	tính tổng các phần tử trong array trên
let num = [3, 2, 4, '5', 1, 8, 7, '9'];
let sum = 0;
for (let i = 0; i < num.length; i++) {
    // if (typeof num[i] === 'number') {
        sum += parseInt(num[i]);
    // }
}
console.log(sum);

// b.	hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
let array2 = data.filter(item =>  item %2 !== 0);
console.log(array2);

// c.	hãy tạo ra array3 chứa các phần tử của data theo thứ tự  đảo ngược 
// // kết quả [ '9', 7, 8, 1, '5', 4, 2, 3]

let array3 = [...data].reverse();
console.log(array3);