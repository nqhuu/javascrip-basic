// Bài 7: cho  
let array = [1,5,7,8,9,15] 
// sử dụng map hoặc filter
// a.	 in ra các số chẵn trong mảng

let mangChan = array.filter(item =>{
    return item % 2 ===0;
})
console.log(mangChan);

// b.	 in ra các số lẻ  trong mảng

let mangLe = array.filter(item =>{
    return item % 2 !==0;
})
console.log(mangLe);

// c.	in ra các số lớn hơn hoặc bằng 5 trong mảng

let array5 = array.filter(item =>{
    return item >= 5;
})
console.log(array5); 

// d.	in ra các số chia hết cho 5 trong mảng

let chiaHet5 = array.filter(item =>{
    return item % 5 === 0 ; 
})
console.log(chiaHet5); 

// e.	 Tìm các số > 5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị

let tang5 = [];
array.forEach(item => {
    if (item > 5){
      tang5.push(item+1);
    }
})
console.log(tang5);

// f.	dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng

let copyEnd = array.slice(3);
console.log(copyEnd);

// g.	.splice để xóa 1 phần tử trong mảng
// bắt đầu xoá ở vị trí 0, xoá đi 1 số ở mảng array, đẩy phần tử bị xoá về newArray.
let newArray = array.splice(0,1)
console.log(newArray);
console.log(array);


// h.	.push thêm 1 phần tử vào cuối mảng 

array.push(...newArray);
console.log(array);

// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]

let newArray2 =[];
for (i=0; i < array.length; i++){
    newArray2.push(array[i]*2)
}
console.log(newArray2);