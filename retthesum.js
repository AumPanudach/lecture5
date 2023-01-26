function sumTwoSmallestNum(num){
    let show = 0
    let i = 1;
    let v = 2 
    while(i < num.length){
         if(num[i+v] > 0 ){
            show = num[i] + num[i+v];
            break;
         }
         else {
            v++;
         }

    }
    return show;
}
console.log(sumTwoSmallestNum([3683,2902,3951,-475,1617,-2385]));