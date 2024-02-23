var table = document.getElementById("game_table");
var span_turn = document.getElementById("turn");
var scor_1 = document.getElementById("scor_player_1");
var scor_2 = document.getElementById("scor_player_2");
var p1 = "player 1 turn";
var p2 = "player 2 turn";
var time=0;
var win=0;
var score = [0,0];
var board = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let turn=0;
scor_1.innerHTML= score[0];
scor_2.innerHTML= score[1];
start_game();

function wipe_score(){
    start_game();
    score = [0,0];
    scor_1.innerHTML= score[0];
    scor_2.innerHTML= score[1];
}

function start_game(){
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    time=0;
    win=0;
    turn=0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++)
                {console.log("start..");
                table.rows[i].cells[j].innerHTML="";
                    table.rows[i].cells[j].onclick = function () { game(this); win=checkWinner(board); if(win!=0) endgame(this); return 0;};
    }    }
}

function endgame(){
    score[win-1]+=1;
    scor_1.innerHTML= score[0];
    scor_2.innerHTML= score[1];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++)
                    table.rows[i].cells[j].onclick = null;
    }
}

function game(cell){
    
    if(win==0 && time<9)
        clicked(cell);
}

function checkWinner(board) {
    // Check rows for winner
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
            return board[i][0];
        }
    }
    
    // Check columns for winner
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0) {
            return board[0][i];
        }
    }

    // Check diagonals for winner
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
        return board[0][2];
    }

    return 0;  // No winner
}


function clicked(cell){
    if(board[cell.parentNode.rowIndex][cell.cellIndex]!=0){
        return 0;
    }
    if(turn==0){
        cell.innerHTML = "X";
        board[cell.parentNode.rowIndex][cell.cellIndex]=1;
        span_turn.innerHTML = p2;
        turn=1; time+=1;
    }
    else if(turn==1){
        cell.innerHTML = "O";
        board[cell.parentNode.rowIndex][cell.cellIndex]=2;
        span_turn.innerHTML = p1;
        turn=0; time+=1;

    }
    
}

