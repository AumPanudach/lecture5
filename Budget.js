let obj = ([
    {name : "John", age : 21, budget : 23000}, 
    {name : "Steven", age : 32, budget : 40000}, 
    {name : "Martin", age : 16, budget : 2700}
]);
function getBudgete(show){
    let show2 = 0;
    let name1 = 'budget';
    for(let show1 in show.name1){
        show2 += show1;
    }
    return show2;
}
console.log(getBudgete(obj));