function gop(len){
    let a=' ';
    for(let i=0;i<len;i++){
        a+= Math.floor(Math.random() *10);
    }
    return a;
}
console.log(gop(4));