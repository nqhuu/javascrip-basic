// Bài 14: Cho 
arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'] 
// a.	Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xếp theo thứ tự tăng dần .
let numberArr = arr.filter((item) => typeof item === 'number')
numberArr.sort((a,b) =>a-b);

let stringArr = arr.filter((item) => typeof item === 'string')
// stringArr.sort((c,d) => c-d);
stringArr.sort(function(c,d){  // phân biệt tiếng việt
    return c.localeCompare(d);
});
console.log(numberArr);
console.log(stringArr);
// b.	Hãy tính tổng của các giá trị number và các string number trong arr
const number = arr.filter ((item) => typeof item === 'number');
const stringNumber = arr.filter ((item) => typeof item === 'string' && !isNaN(item));
const sumNumber = number.reduce((total,x) => total + x, 0);
const sumStringNumber = stringNumber.reduce((total,x) => total + parseFloat(x), 0); //parseFloat: biến đổi stringNumber thành Number

console.log('Tổng các giá trị number là:',sumNumber);
console.log('Tổng các giá trị string number là:',sumStringNumber);

// c.	Hãy sắp xếp arr chứa các phần tử số trên theo thứ tự tăng dần.
number.sort((a,b) => a-b)
console.log('Các phần tử số sau khi sắp xếp tăng dần:',number);
// d.	Hãy lấy các giá trị có thuộc tính là number từ arr và kiểm tra xem các số đó có phải là số nguyên tố hay không . 
// const number = arr.filter ((item) => typeof item === 'number'); //lọc các giá trị number
function isPrime(num){ //Kiểm tra xem từng số có phải là số nguyên tố không
    // số nguyên tố là số: lớn hơn 1, chỉ chia hết cho 1 và chính nó (2 là số chẵn duy nhất là số nguyên tố)
    if(num <=1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}
const primeNumber = number.filter((num) =>isPrime(num));
console.log('Các số nguyên tố trong danh sách:',primeNumber);

//