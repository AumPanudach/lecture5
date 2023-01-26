let num1 = 379;
let num2 = 2;
let num3 = 377401;
function  highdigit(num){
    let show = 0
    var number = "";
    number += num  ;
    let i = 9;
    while(0 <= i){
    if(number.indexOf(i) !== -1){
        show += i;
        break;
    }
    else{
        i--;
    }
}
return `highDigit(${num}) => ${show}`;
}
console.log(highdigit(num1));
console.log(highdigit(num2));
console.log(highdigit(num3));
