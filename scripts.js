// User should be able to click a box and mark the square with the user's mark.

// Initialize whosTurn at player 1 (X)
var whosTurn = 1;

var squares = document.getElementsByClassName('square');

for(let i = 0; i < squares.length; i++) {
    // console.log(squares[i]);
    squares[i].addEventListener('click', function(event) {
        markSquare(this);
    })
}

function markSquare(currentSquare) {
    let squareResult = ""
    if ((currentSquare.innerHTML == "X") || (currentSquare.innerHTML == "O")) {
        squareResult = "Sorry, this square is taken."
    } else if (whosTurn == 1){
        currentSquare.innerHTML = "X";
        whosTurn = 2;
        squareResult = "";
    } else {
        currentSquare.innerHTML = "O";
        whosTurn = 1;
        squareResult = "";
    }
    let messageElement = document.getElementById('message');
    messageElement.innerHTML = squareResult;
}
