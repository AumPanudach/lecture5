function captoFront(show){
    var show1 = show;
    var showuper = "";
    var lower = "";
    for(let i = 0 ; i < show.length ; i++){
        if(show1[i].toUpperCase() === show[i]){
            showuper += show1[i];
        }
        else{
            lower += show[i];
        }
    }
    return `CapToFront(${show}) => ${showuper + lower}`
}

console.log(captoFront("hApPy"));
console.log(captoFront("moveMENT"));
console.log(captoFront("shOrtCAKE"));