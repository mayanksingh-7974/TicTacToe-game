// let box = document.getElementByClassName(".box");
// let hoverd = ("click")=>{
//     console.log("color changed");
// }
let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.add("clicked");
    });
}); 
let resetBtn = document.querySelector("#reset");
const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let turno = true;
let cliko = boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText ="X";
            turno = false;
        }
        else{
          box.innerText ="O";
            turno = true;  
        }
        box.disabled = true;
        checkWinner();
        
    })
})
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);

       let pos1 =   boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){

boxes[pattern[0]].classList.add("winner2");
boxes[pattern[1]].classList.add("winner2");
boxes[pattern[2]].classList.add("winner2");

                showWinner(pos1);
            }
        }
    }
}
let newGameBtn = document.querySelector("#newGame");
let msgCon= document.querySelector(".msg-container");
// let msgCon2= document.querySelector(".winner2");
let msg = document.querySelector("#msg");
const showWinner = (winner) =>{
msg.innerText = `Congrats, the winner is ${winner}`;
// msgCon2.classList.add("winner2");
msgCon.classList.remove("hide");
disableBox();

}
 
const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = ()=>{
     for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("clicked");

        box.classList.remove("winner2");
    }
}
const resetGame = ()=>{
turno = true;
enableBox();
msgCon.classList.add("hide");

}
newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
