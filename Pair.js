function number(num,result){
 let show = 0 ;
 let show2 = 0 ;
 let num3 = [null];
 for(let i = 0 ; i < num.length ; i++){
    for(let v = 1 ; v < num.length  ; v++){
        let num1 = num[i] * num[v]; 
        if(num1 === result){
            if(num[i] < num[v]){
                num3.push(num[i]);
                num3.push(num[v]);
                break;
            }
            else{
                num3.push(num[v]);
                num3.push(num[i]);
                break;
            }
        }
        else{
            show = null
        }
    }
    if(num3.indexOf(i+1) !== -1){
        break;
    }
    }  
    if(num3.length < 1){
        return null
    }  
    else{
        return num3.slice(1);
    }
}

console.log(number([1,2,3],3))