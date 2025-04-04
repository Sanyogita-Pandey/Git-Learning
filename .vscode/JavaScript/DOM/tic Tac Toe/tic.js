let turn = 'O'
let total_turn = 0

let winner =[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
const board_Array = new Array(9).fill("E")

function checkWinner(){
    for(let[index0,index1,index2] of winner){
        if(board_Array[index0]!="E"&& board_Array[index0]===board_Array[index1]&&board_Array[index0]===board_Array[index2])
        return 1
    }
    return 0
}
const printer =(event)=>{
    const element = event.target
    if(board_Array[element.id]==="E"){
        total_turn++
        if(turn==='O'){
            element.innerHTML = "O"
            board_Array[element.id]="O"
            if(checkWinner()){
                document.getElementById('winningMesage').innerHTML="winner is O"
                board.removeEventListener('click',printer)
                return
    
            }
            turn = "X"
        }
        else{
            element.innerHTML="X"
            board_Array[element.id]="X"
            if(checkWinner()){
                document.getElementById('winningMesage').innerHTML="winner is X"
                board.removeEventListener('click',printer)
                return 
                
            }
            turn="O"
        }
    if(total_turn==9)
    {
        document.getElementById('winningMessage').innerHTML="Match is draw"
        board.removeEventListener('click',printer)
    }
    }
}

const board = document.querySelector('.board')
board.addEventListener('click',printer)

const Restart = document.getElementById("restartButton")
Restart.addEventListener('click',()=>{
    const cell = document.getElementsByClassName('cell')

    Array.from(cell).forEach((value) => {
        value.innerHTML=""
    });
        turn="O"
        total_turn=0
        board_Array=new Array(9).fill("E")
        document.getElementById('winningMesage').innerHTML=""
        board.addEventListener('click',printer)
})