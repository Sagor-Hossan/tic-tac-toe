let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let playAgain = document.querySelector('#playAgain');
let modal = document.querySelector('.modal');
let section = document.querySelector('section');
let winnerText = document.querySelector('#winner');

let turn0 = true;
const reset = ()=>{
    for (const box of boxes) {
        box.innerHTML = '';
        box.disabled = false;
    }
}
resetBtn.addEventListener('click', reset)
playAgain.addEventListener('click', ()=>{
    modal.classList.add('hide');

    section.className=''
    reset();
})

const showWinner = (winner) =>{
    modal.classList.remove('hide');
    section.classList.add('hide');
    winnerText.innerHTML = `${winner}`;
    count = 0
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];  
let count = 0
boxes.forEach(box => {
    box.addEventListener('click', e => {
        if (turn0) {
            box.innerHTML = 'O';
            turn0 = false;
        }else{
            box.innerHTML = 'X';
            turn0 = true;
        }
        count++
        box.disabled = true;
        checkWin();
    })
});

const checkWin = () =>{
    for (const pattern of winConditions) {
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if(pos1===pos2 && pos2===pos3){
                let win = `'${pos1}' is Winner`
                showWinner(win)
            }else if(count === 9){
                let draw = 'Game Draw'
                showWinner(draw)
            }
        }
    }
}
