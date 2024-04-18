const array = [1, 6, 8, 7, 10, [6, 8, 7, 4, 3, 5], 3, [4, 3, 5]];

// Tính tổng của phần tử đầu và phần tử cuối
const firstElement = array[0];
const lastElement = array[array.length - 1];

function firstElement(array){
    const sumFirst = 0;
    if(Array.isArray(firstElement)){
        const sumFirst = firstElement.reduce((acc, curr) => acc + curr, 0);
        return sumFirst;
    }else {
        console.log(array[0]);
    }
}
console.log(firstElement(array));



// const sumLast = lastElement.reduce((acc, curr) => acc + curr, 0);
// const sumFirstAndLast = sumFirst + sumLast;


// console.log(`Tổng của phần tử đầu và phần tử cuối trong array: ${sumFirstAndLast}`);
