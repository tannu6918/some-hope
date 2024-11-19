let boxes = document.querySelectorAll(".box");
let submit = document.querySelectorAll("#submit");
let newbutton = document.querySelectorAll("#new-Button");
let  msgconteiner = document.querySelectorAll(".msg-container")
let msg = document.querySelectorAll("#msg");

let turnO = true


const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener( "click",()=>{
    console.log("box  was clicked");
    if(turnO){
        box.innerHTML  = "O";
        turnO = false;

    }
    else{
        box.innerHTML = "X";
        turnO = true;
    }
    box.disabled = true;

    checkwinner();
    })
});



const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgconteiner.classList.remove("hide");
   // disableBoxes();
  };

const checkwinner = ()=>{
    for( let pattern of winpattern){
         //console.log(pattern);

        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;

        if(post1val != "" && post2val != "" && post3val != ""){
            if(post1val === post2val && post2val === post3val){
                console.log("winner",post1val);

                showWinner(post1val);
            }
        }
    }
}
