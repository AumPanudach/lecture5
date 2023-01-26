
function reMoveDups(name){
    var show = [null];
    let num = 0;
    for(let i = name.length-1 ; i > 0 ; i--){
        num = name[i];
        for(let v = 0 ; v < name.length ; v++){
            if(num == show[v]){
            }
            else{
                show.push(num);
                console.log(show);
            }
        }
    }
 return show;
}
let num = [1,0,1,0];
console.log(reMoveDups(num));