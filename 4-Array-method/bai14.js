
/* Bài 14: Cho arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'] 
a.	Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xếp theo thứ tự tăng dần .
b.	Hãy tính tổng của các giá trị number và các string number trong arr
c.	Hãy sắp xếp arr chứa các phần tử số trên theo thứ tự tăng dần.
d.	Hãy lấy các giá trị có thuộc tính là number từ arr và kiểm tra xem các số đó có phải là số nguyên tố hay không . 
*/
// Bài làm :
  
// let arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'] 

// // a.	Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xếp theo thứ tự tăng dần .
// let arrnumber = []
// let arrstring = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (typeof element === "number") {
//         arrnumber.push(element)
//     } else {
//        arrstring.push(element) 
//     }
// }
// arrnumber.sort((a,b) => a - b)
// console.log(arrnumber)
// console.log(arrstring)
// b.	Hãy tính tổng của các giá trị number và các string number trong arr
let sum1 = arrnumber.reduce((a , b) => a + b , 0)
let sum2 = arrstring.reduce((a , b) => a + b, 0)
console.log(sum1)
console.log(sum2)

// c.	Hãy sắp xếp arr chứa các phần tử số trên theo thứ tự tăng dần.
arrnumber.sort((a,b) => a - b)
console.log(arrnumber)
// d.	Hãy lấy các giá trị có thuộc tính là number từ arr và kiểm tra xem các số đó có phải là số nguyên tố hay không . 
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

let arr = [1, 4, 2, 5, 7, 2, 8, '23', 3, 8, 6, 'a', 3, 9, 'd', "c", 11, 'f', 'r', 35, 'g', 'b', 42, 'k', 'j', 'h', '11'];
let arrnumber = [];
let arrstring = [];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === "number") {
        arrnumber.push(element);
    } else {
        arrstring.push(element);
    }
}

arrnumber.sort((a, b) => a - b);
console.log(arrnumber);
console.log(arrstring);

let primeNumbers = arrnumber.filter(item => isPrime(item));
console.log(primeNumbers);