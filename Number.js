let num1 = 4 ;
let num2 = 10 ;
let num3 = 11 ;
let num4 = -9 ;

function numbersplit(num1){
    let  show =  Math.floor(num1 / 2);
    return `numberSplite(${num1}) => [${show},${num1-show}] ` ;
}

console.log(numbersplit(num1));
console.log(numbersplit(num2));
console.log(numbersplit(num3));
console.log(numbersplit(num4));