// Bài 11: Cho 
array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
// a.	Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
// b.	Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.

//Cách 1: Áp dụng Filter
function isEven (number){
    return number %2 === 0;
}
let newArray = array3.filter(isEven); // Sử dụng filter để lọc các số chẵn
console.log('Các giá trị chẵn là:',newArray);

let newArray2 = array3.filter(function(number){
    return number%2 !== 0 & number > 3;
})
console.log('Các giá trị lẻ và  lớn hơn 3 là:',newArray2);



//Cách 2:áp dụng vong lặp
// newArray = [];
// for (let i = 0; i < array3.length; i++) {
//     if (array3[i]%2 === 0) {
//         newArray.push(array3[i]);
//     }
// }
// console.log(newArray);


// newArray2 = [];
// for (let i = 0; i < array3.length; i++) {
//     if (array3[i] % 2 !== 0 & array3[i] > 3) {
//         newArray2.push(array3[i]);
//     } 
// }
// console.log(newArray2);

//
