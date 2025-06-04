let btn=document.querySelector("button")
let cpy=document.querySelector(".copy-icon")
const pass=document.getElementById("password")
const le=12;
const u="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const l="abcdefghijklmnopqrstuvwxyz"
const s="@#$%^&*(){}[]<>?=-";
const n="0123456789";
const a=u+l+s+n;

function create(){
    let p="";
    while(le>p.length){
        p+=a[Math.floor(Math.random() * a.length)];
    }
    return p;
}

btn.addEventListener("click",function(){
    pass.value=create()
})

cpy.addEventListener("click", function () {
    pass.select();
    navigator.clipboard.writeText(pass.value).then(() => {
        alert("Password copied to clipboard!");
    });
});

