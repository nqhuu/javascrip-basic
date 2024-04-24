// Bài 4: 
var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]
// in ra tổng các số có trong array
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] === 'number') {
        sum += arr2[i];
    }
}
console.log(`Tổng các số có trong array là: ${sum}`);

console.log(numberOnly = arr2.filter(item => typeof item  === 'number'));
