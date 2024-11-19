let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userscorepara = document.querySelector("#user-scroe");
let compscorepara = document.querySelector("#comp-scroe");
 
  let getcompChoice = ()=>{
   const option = ["rock","paper","scissors"];;
   const random = Math.floor(Math.random ()*3);
   return option[random];
  }

  const drowgame = ()=>{
    //console.log("Drow game");
    msg.innerText = "Game Was Drow , Restart Game";
    msg.style.backgroundColor = "orange";
  }

  const showWinner = (userwin , userChoice,compchoise) =>{
 if(userwin){
    userscore++
   userscorepara.innerHTML = userscore;
   // console.log("you win");
    msg.innerText =` You win! you ${userChoice} beats the comp ${compchoise}`;
    msg.style.backgroundColor = "green"
 } else{
    compscore++
    compscorepara.innerHTML =compscore;
    //console.log("you lost");
    msg.innerText = `You lost! computer ${compchoise} beats you ${userChoice}`;
    msg.style.backgroundColor = "Red";
 }
  }

const playgame = (userChoice)=>{
// console.log("user choice" , userChoice);
 // comp choice
 const compchoise = getcompChoice();
 //console.log("comp choice",compchoise);
 if(userChoice === compchoise){
    //drow game
    drowgame();
 }  else{
    let userwin = true;
    if(userChoice === "rock"){
        // scissors, paper
        userwin =  compchoise === "paper"? false:true;
    }else if(userChoice === "paper"){
        // scissors , rock
         userwin = compchoise === "scissors"? false:true;
    } else{
      // rock,paper
      userwin = compchoise === "rock"?false:true;
    }

    showWinner(userwin,compchoise,userChoice);
 }
}

choices.forEach( (choice)=> {
    choice.addEventListener("click" ,()=>{
        const userChoice = choice.getAttribute("id");
        

        playgame(userChoice);
    })
});