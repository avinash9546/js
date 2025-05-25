const num=(arr) => {
    let sum=0;
    for(let n of arr){
        sum+=n;
    }
    return sum/arr.length
}

let arr=[2,3,4,5,6,7,3,4,5,6]
console.log(num(arr))




const even=(num) =>{
    if(num%2 ==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

even(89)