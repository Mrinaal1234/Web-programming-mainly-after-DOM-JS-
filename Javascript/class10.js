let userScore =0;
let compScore= 0;

const userscorepara = document.querySelector("#myscore");
const compscorepara = document.querySelector("#compscore");
const result = document.querySelector(".result");
const choices = document.querySelectorAll(".button");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
});

const drawgame=()=>{
    console.log("Draw");
    result.innerText = "game was draw";
}
const playgame=(userchoice) =>{
    console.log("user choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice =",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice ==="paper"?false:true;
        }
        else if(userchoice ==="scissor"){
            userwin = compchoice==="rock"?userwin = false:true;
        }
        else{
            userwin = compchoice==="scissor"?userwin = false:true;
        }
        showwinner(userwin);
    }
    

};

const showwinner=(userwin)=>{
    if(userwin===true){
        console.log("You win");
        result.innerText = "You win";
        result.style.backgroundColor="green";
        userScore++;
        userscorepara.innerText = userScore;
    }
    else{
        console.log("You lose");
        result.innerText = "You lose";
        result.style.backgroundColor="red";
        result.style.color = "white";
        compScore++;
        compscorepara.innerText = compScore;
    }
};

const gencompchoice=()=>{
    let options = ["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}