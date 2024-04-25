// Bài 6: 
let data = [1,2,1,3,1,2,3,4,5,6,5,4]
// in ra các phần tử bị trùng nhau

let dup = [];
// so sánh 1 phần tử của data với chính mảng data
data.forEach((item,index) =>{
    let check = false;
for(i=index+1; i<data.length; i++){
    // nếu item được xác định bằng 1 trong các giá trị của data thì đổi check = true và dừng vòng lặp.
    if(item === data[i]){
        check = true;
        break;
    };
};
// nếu check = true và trong mảng dup không tồn tại giá trị nào = item thì đưa vào mảng dup sau đó tiếp tục với item tiếp theo
    if(check && !dup.includes(item)){
        dup.push(item)
    }
})
console.log(dup);