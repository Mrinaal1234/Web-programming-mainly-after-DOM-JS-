//events
let btn1 = document.querySelector("#btn1");

// btn1.onclick=()=>{
//     let a=25;
//     a++;
//     console.log(a);
// };
//event object 
//All event handlers have access to the event ojects properties and methods
//node.event=(e)=?{

// }
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

//event listners
btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked1");
})

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked2");
})

btn1.addEventListener("click",()=>{
    console.log("btn1 was clicked3");
})
let currmode = "light";

let modebtn = document.querySelector("#mode");
modebtn.addEventListener("click",() =>{
    // console.log("you are trying to change the colour");
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
});