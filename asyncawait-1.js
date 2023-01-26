function promiseTimeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms);
    });
}
async function run(){
    console.log("start!!");
    await promiseTimeout(2000);
    console.log("Stop!!");
}
console.log('Befor run');
run();
console.log('After run');