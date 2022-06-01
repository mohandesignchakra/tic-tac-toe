const dataCell = document.querySelectorAll("[data-cell]")

const winningChance = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const restart = document.getElementById("restartButton");

function restartPage(){
    window.location.reload();
}

restart.addEventListener('click', restartPage)

dataCell.forEach(
    cell => { cell.addEventListener('click', handleClick, { once: true }) }
);

var clickNumber = 0;

result = 0;

function handleClick(e){
    clickNumber++;

    if(clickNumber === 9){
        var winningMessage =  document.getElementById("winning-message");
        var winningDraw = document.querySelector("[data-winning-message-text]");

        winningMessage.classList.add("show")
        winningDraw.innerText = 'Draw !';
    }

    if (clickNumber % 2 == 0) {

        var turnChange = document.getElementById("board");
        turnChange.classList.remove("xTurn");
        turnChange.classList.add("circleTurn");
        e.target.classList.add("x");
        
        if (xWinCombination(winningChance)){
            var winningMessage = document.getElementById("winning-message");
            var winningX = document.querySelector("[data-winning-message-text]");
            
            winningMessage.classList.add("show")
            winningX.innerText = '"X" Winner';
        };

    }

    else {

        var turnChange = document.getElementById("board");
        turnChange.classList.remove("circleTurn");
        turnChange.classList.add("xTurn");
        e.target.classList.add("circle");

        if (circleWinCombination(winningChance)){
            var winningMessage = document.getElementById("winning-message");
            var winningCircle = document.querySelector("[data-winning-message-text]");

            winningMessage.classList.add("show")
            winningCircle.innerText = '"O" Winner';
        };

    }
    
}

function xWinCombination(winningChance){
    return winningChance.some(combination =>{
        return combination.every(index => {
            return dataCell[index].classList.contains('x')
        })
    })
}

function circleWinCombination(winningChance){
    return winningChance.some(combination =>{
        return combination.every(index => {
            return dataCell[index].classList.contains('circle')
        })
    })
}