let num = [[2,2,2],[2,1,1]];
function totalVolum(num1){
    let show = 1;
    let number = 0;
    let show1 = 0;
    for(let i = 0 ; i <= num1.length ; i++){
        number = num1.pop();
        for(let v = 0 ; v < number.length ; v++){
            show *= number[v]; 
        } 
        show1 += show;
        show = 1;
    }
    return show1;
}
console.log(totalVolum(num));