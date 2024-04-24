// Bài 6: 
var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// in ra các phần tử bị trùng nhau


/*Tạo hàm lấy phần tử trùng trong mảng JavaScript*/
function duplicateElement( array, size){
    let result = [];
    let count = 0;
    for (let i = 0; i < size - 1; ++i) {
        for (let j = i + 1; j < size; ++j) {
            if (array[i] == array[j]) {
                /*Tìm thấy phần tử trùng thì thêm vào mảng kết quả*/
                result[count]=array[i];
                ++ count;
            }
        }
    }
    return result
}

let result1 = duplicateElement (data,data.length);
console.log(`Các phần tử bị trùng nhau: ${result1}`);
