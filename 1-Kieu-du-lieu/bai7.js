// Bài 7: Cho 
array = [1,6,8,7,10 , [6,8,7,4,3,5],[2,8,7,4,3],3]
// a.	Tính tổng của phần tử đầu và phần tử cuối trong array và array con 
// Tính tổng của phần tử đầu và cuối trong array

function tinhtong2 (arr){
    var phanTuDau = arr[0];
    var phanTuCuoi = arr[arr.length-1];
    var tinhtong = phanTuDau + phanTuCuoi;
    return tinhtong;
}
console.log(`Tổng của phần tử đầu và cuối trong array là: ${tinhtong2(array)}`);

// Tìm phần tử là array con và tính tổng phần tử đầu và cuối
for (i = 0; i < array.length;i++){
    // console.log(typeof array[i]);
    if(Array.isArray(array[i])) {
        console.log(`Phần tử chứa array con có i = ${i}`); 
        console.log(array[i]);
        console.log(`Tổng phần tử đầu và cuối trong array con là: ${tinhtong2(array[i])}`);
    }
};

// b.	 hãy thêm số 10 vào cuối array con và tính lại tổng trên

for (i = 0; i < array.length;i++){
    if(Array.isArray(array[i])) {
        array[i].push(10);
        console.log(`Phần tử chứa array con có i = ${i}`); 
        console.log(array[i]);
        console.log(`Tổng phần tử đầu và cuối trong array con sau khi thêm là: ${tinhtong2(array[i])}`);
    }
};


// // Lọc ra các mảng con
// const subArrays = array.filter(item => Array.isArray(item));

// // Hiển thị kết quả
// console.log("Các mảng con trong array:");
// subArrays.forEach(subArray => console.log(subArray));

