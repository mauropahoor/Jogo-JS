function game(id){
    let move = document.getElementById(id);
    let round = parseInt(document.getElementById("round").value);
    let winner = document.getElementById("winner");

    if(move.getAttribute("value") == 0){ //Don't make the game be able to repeat a move
        if(round % 2 == 0){ //Check if have to use X or O (odd==X)(even=O)
            move.setAttribute("src", "assets/img/o.png")
            move.setAttribute("value", "o");
            document.getElementById('round').setAttribute('value', round += 1);
        }
        else if(round % 2 != 0){
            move.setAttribute("src", "assets/img/x.png");
            move.setAttribute("value", "x");
            document.getElementById('round').setAttribute('value', round += 1);
        }
    }
    let matrix_size = 3;
    let position = new Array(matrix_size); //Create matrix with the moves

    for (i = 0; i < position.length; i++){
        position[i] = new Array(matrix_size);
    }
    for (i = 0; i < matrix_size; i++){
        for(j = 0; j < matrix_size; j++){
            let id = i.toString() + j.toString(); //Method to identify each ID in HTML and create an matrice with the moves
            position[i][j] = document.getElementById(id).getAttribute("value");
        }
    }
    let empty_space = 0;
    for (i = 0; i < matrix_size; i++){
        for (j = 0; j < matrix_size; j++){
            if(position[i][j] != '0'){
                empty_space++;
            }
        }
    }
    if(empty_space == 9){
        winner.innerHTML = "Deu velha!";
    }
    for ( i = 0, j = 0; i < matrix_size; i++) {
        if((position[i][j] == 'x' && position[i][j + 1] == 'x' && position[i][j + 2] == 'x') || (position[i][j] == 'o' && position[i][j + 1] == 'o' && position[i][j + 2] == 'o')){

            if(position[i][j] == 'x')
                winner.innerHTML = "O vencedor foi o X!";
            else
                winner.innerHTML = "O vencedor foi o O!";
        }
    }
    for ( i = 0, j = 0; j < matrix_size; j++) {
        if((position[i][j] == 'x' && position[i + 1][j] == 'x' && position[i + 2][j] == 'x') || (position[i][j] == 'o' && position[i + 1][j] == 'o' && position[i + 2][j] == 'o')){
   
            if(position[i][j] == 'x')
                winner.innerHTML = "O vencedor foi o X!";
            else
                winner.innerHTML = "O vencedor foi o O!";
        }
    }
    if((position[0][0] == 'x' && position[0 + 1][0 + 1] == 'x' && position[0 + 2][0 + 2] == 'x') || (position[0][0] == 'o' && position[0 + 1][0 + 1] == 'o' && position[0 + 2][0 + 2] == 'o')){
        if(position[0][0] == 'x')
            winner.innerHTML = "O vencedor foi o X!";
        else
            winner.innerHTML = "O vencedor foi o O!";
    }
    if((position[0][2] == 'x' && position[0 + 1][2 - 1] == 'x' && position[0 + 2][2 - 2] == 'x') || (position[0][2] == 'o' && position[0 + 1][2 - 1] == 'o' && position[0 + 2][2 - 2] == 'o')){
        if(position[0][2] == 'x')
            winner.innerHTML = "O vencedor foi o X!";
        else
            winner.innerHTML = "O vencedor foi o O!";
    }
}
function restart(){
    let game_size = 3;
    let winner = document.getElementById("winner");
    let round = document.getElementById("round");
    winner.innerHTML = ""; //Reset the winning text
    round.setAttribute("value", '0'); //Reset round

    for (i = 0; i < game_size; i++){
        for(j = 0; j < game_size; j++){
            let id = i.toString() + j.toString();
            document.getElementById(id).setAttribute('value', '0'); //Reset the value in matrice and the image
            document.getElementById(id).setAttribute('src', 'assets/img/empty.png');
        }
    }
}