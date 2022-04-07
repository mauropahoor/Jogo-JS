function start_game(){
    let user_option = document.getElementsByName('user_option');
    let options = ['pedra', 'papel', 'tesoura'];
    let computer_option = options[Math.floor(Math.random() * 3)];
    let result = document.getElementById('result');
    
    let user_score = parseInt(document.getElementById('aux_user_score').value);
    let computer_score = parseInt(document.getElementById('aux_computer_score').value);
    for(i = 0; i < user_option.length; i++){
        if(user_option[i].checked){
            user_option = user_option[i].value;
            if((user_option == "pedra" && computer_option == "pedra") || (user_option == "papel" && computer_option == "papel") || (user_option == "tesoura" && computer_option == "tesoura")){
                result.innerHTML = "Vou jogar " + computer_option + "!<br>Logo, empatamos.";
            }
            else if ((user_option == "pedra" && computer_option == "papel") || (user_option == "papel" && computer_option == "tesoura") || (user_option == "tesoura" && computer_option == "pedra")){
                result.innerHTML = "Vou jogar " + computer_option + "!<br>Logo, você perdeu.";
                document.getElementById("aux_computer_score").setAttribute("value", computer_score += 1); //Adicionar pontuação
                document.getElementById('computer_score').innerHTML = aux_computer_score.value;
            }
            else if ((user_option == "pedra" && computer_option == "tesoura") || (user_option == "papel" && computer_option == "pedra") || (user_option == "tesoura" && computer_option == "papel")){
                result.innerHTML = "Vou jogar " + computer_option + "!<br>Logo, você ganhou.";
                document.getElementById("aux_user_score").setAttribute("value", user_score += 1); //Adicionar pontuação
                document.getElementById('user_score').innerHTML = aux_user_score.value;
            }
        }
    }
}