function addUser(){
    var player1_name = document.getElementById("player1_name").value;
    var player2_name = document.getElementById("player2_name").value;
    localStorage.setItem("Player1_name", player1_name);
    localStorage.setItem("Player2_name", player2_name);
    window.location = "game_page.html";
}