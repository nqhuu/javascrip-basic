
/*
Bài 4: var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]
in ra tổng các số có trong array

Bài làm
*/
var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]
var sum = 0;
for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    // if (typeof element === "number" && !isNaN(element)) {
        if (typeof element === "number" && element !== isNaN) {
        sum += element
    }
}
console.log(sum)