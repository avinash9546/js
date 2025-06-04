let ul=document.querySelector("ul")
let inp=document.querySelector("input")
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    let lii=document.createElement("li")
    lii.innerText=inp.value

    let dell=document.createElement("button")
    dell.innerText="delete"
    dell.classList.add("del")
    lii.appendChild(dell)
    ul.appendChild(lii)
    inp.value=""
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement
        par.remove()
   }
})
    



// let delbtns=document.querySelectorAll(".del")
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement
//         par.remove()
//     })
// }