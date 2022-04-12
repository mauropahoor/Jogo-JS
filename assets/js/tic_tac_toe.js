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
            let content = i.toString() + j.toString(); //Method to identify each ID in HTML and create an matrice with the moves
            position[i][j] = document.getElementById(content).getAttribute("value");
        }
    }
    for ( i = 0; i < matrix_size; i++) {
        for (j = 0; j < matrix_size; j++){
            //Check if O or X win

            if((position[i][j] == 'x' && position[i][j + 1] == 'x' && position[i][j + 2] == 'x') || (position[i][j] == 'o' && position[i][j + 1] == 'o' && position[i][j + 2] == 'o')){
                if(position[i][j] == 'x')
                    winner.innerHTML = "O vencedor foi o X!";
                else
                    winner.innerHTML = "O vencedor foi o O!";
            }
            else if((position[i][j] == 'x' && position[i + 1][j] == 'x' && position[i + 2][j] == 'x') || (position[i][j] == 'o' && position[i + 1][j] == 'o' && position[i + 2][j] == 'o')){
                if(position[i][j] == 'x')
                    winner.innerHTML = "O vencedor foi o X!";
                else
                    winner.innerHTML = "O vencedor foi o O!";
            }
            else if((position[i][j] == 'x' && position[i + 1][j + 1] == 'x' && position[i + 2][j + 2] == 'x') || (position[i][j] == 'o' && position[i + 1][j + 1] == 'o' && position[i + 2][j + 2] == 'o')){
                if(position[i][j] == 'x')
                    winner.innerHTML = "O vencedor foi o X!";
                else
                    winner.innerHTML = "O vencedor foi o O!";
            }
            else if((position[i][j] == 'x' && position[i + 1][j - 1] == 'x' && position[i + 2][j - 2] == 'x') || (position[i][j] == 'o' && position[i + 1][j - 1] == 'o' && position[i + 2][j - 2] == 'o')){
                if(position[i][j] == 'x')
                    winner.innerHTML = "O vencedor foi o X!";
                else
                    winner.innerHTML = "O vencedor foi o O!";
            }
        }
    }
}
function restart(){
    let game_size = 3;
    let winner = document.getElementById("winner");
    winner.innerHTML = ""; //Reset the winning text

    for (i = 0; i < game_size; i++){
        for(j = 0; j < game_size; j++){
            let content = i.toString() + j.toString();
            document.getElementById(content).setAttribute('value', '0'); //Reset the value in matrice and the image
            document.getElementById(content).setAttribute('src', 'assets/img/empty.png');
        }
    }
}