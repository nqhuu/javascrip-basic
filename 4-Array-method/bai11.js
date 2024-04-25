/* 
Bài 11: Cho array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];
a.	Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
b.	Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.

Bài làm
*/
let array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9];

// a.	Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
let newArray = array3.filter(
    function (params) {
        return params % 2 === 0
    }
)
console.log(newArray)

// b.	Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.
let newArray2 = array3.filter(
    function (params) {
        return params % 2 !== 0 && params > 3
    }
)
console.log(newArray2)