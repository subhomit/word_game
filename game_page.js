var player_1_name = localStorage.getItem("Player1_name");
var player_2_name = localStorage.getItem("Player2_name");
var player_1_score = 0;
var player_2_score = 0;
document.getElementById("player1_name").innerHTML = player_1_name + "  :  ";
document.getElementById("player2_name").innerHTML = player_2_name + "  :  ";
document.getElementById("player1_score").innerHTML = " " + player_1_score;
document.getElementById("player2_score").innerHTML = " " + player_2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
function send(){
    var get_word = document.getElementById("word").value;
    var word = get_word.toLowerCase();
    console.log(word);
    
    var charAt1 = word.charAt(1);
    console.log(charAt1);

    var length_div_2 = Math.floor(word.length/2);
    var charAt2 = word.charAt(length_div_2);
    console.log(charAt2);

    var length_minus_1 = word.length - 1;
    var charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    var remove_charAt1 = word.replace(charAt1, "_");

    var remove_charAt2 = remove_charAt1.replace(charAt2, "_");

    var remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    var question_word = "<h4 id = 'word_display'>Q. " + remove_charAt3 + "</h4>";
    var input_box = "<br> answer : <input type = 'text' id = 'input_answerBox'>";
    var check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'> Check </button>"
    var row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
var question_turn = "player1";
var answer_turn = "player2";
function check(){
    var get_answer = document.getElementById("input_answerBox").value;
    var answer = get_answer.toLowerCase();
    console.log(answer);
    if(answer == word){
        if(answer_turn == "player1"){
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    else{
        if(answer_turn == "player1"){
            player_1_score = player_1_score - 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        }
        else{
            player_2_score = player_2_score - 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}

