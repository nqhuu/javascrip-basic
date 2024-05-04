// Bài 15: hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
var data = [1,2,3,1,2,3,4,5,6,5,4,6,3,9]
var frequency ={};
data.forEach(function(value){
    if (value in frequency) {
        frequency[value]++;
    } else {
       frequency[value] = 1; 
    }
});
for(var num in frequency){
    console.log(`Số ${num} xuất hiện ${frequency[num]} lần`);
}
