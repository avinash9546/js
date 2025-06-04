let f=document.querySelector("form")

f.addEventListener("submit",function(event){
    event.preventDefault();
    let use=document.querySelector("#user")
    let pas=document.querySelector("#pass")

    alert(`hi,${use.value} your password is ${pas.value}`)
})