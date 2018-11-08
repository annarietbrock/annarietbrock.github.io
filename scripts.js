var player_name = localStorage.getItem("player_name");
var playerScore = localStorage.getItem("player_score");
var computerScore = localStorage.getItem("computer_score");
var totalGames = localStorage.getItem("total_Games");

var p_Rock = localStorage.getItem("pRock");
var p_Paper = localStorage.getItem("pPaper");
var p_Sciss = localStorage.getItem("pSciss");
var c_Rock = localStorage.getItem("cRock");
var c_Paper = localStorage.getItem("cPaper");
var c_Sciss = localStorage.getItem("cSciss");

updateStatistics();




if(!p_Rock){
  p_Rock = 0;
}

else{
  p_Rock = parseInt(localStorage.getItem("pRock"));
}

if(!p_Paper){
  p_Paper = 0;

}

else{
  p_Paper = parseInt(localStorage.getItem("pPaper"));
}

if(!p_Sciss){
  p_Sciss = 0;
}

else{
  p_Sciss = parseInt(localStorage.getItem("pSciss"));
}

if(!c_Rock){
  c_Rock = 0;
}

else{
  c_Rock = parseInt(localStorage.getItem("cRock"));
}

if(!c_Paper){
  c_Paper = 0;
}

else{
  c_Paper = parseInt(localStorage.getItem("cPaper"));
}

if(!c_Sciss){
  c_Sciss = 0;
}

else{
  c_Sciss = parseInt(localStorage.getItem("cSciss"));
}


if(!totalGames){
  totalGames = 0;
}

else{
  totalGames = parseInt(localStorage.getItem("total_Games"));
}

if(!playerScore){
  playerScore = 0;
}

else{
  playerScore = parseInt(localStorage.getItem("player_score"));
}

if(!computerScore){
  computerScore = 0;
}

else{
  computerScore = parseInt(localStorage.getItem("computer_score"));
}

if(!player_name){
  showOrNot(document.getElementById("enter_name"), true);
}
else{
  updateNames(player_name);
  showOrNot(document.getElementById("enter_name"), false);
  showOrNot(document.getElementById("throw_choice"), true);
}

updateStatistics();




function updateStatistics(){
  //updateNames(player_name);
  var pRockStat = Math.round((p_Rock/totalGames)*100.00);
  var pPaperStat = Math.round((p_Paper/totalGames)*100);
  var pScissStat = Math.round((p_Sciss/totalGames)*100);
  var cRockStat = Math.round((c_Rock/totalGames)*100);
  var cPaperStat = Math.round((c_Paper/totalGames)*100);
  var cScissStat = Math.round((c_Sciss/totalGames)*100);

  localStorage.setItem("computer_score", computerScore);
  localStorage.setItem("player_score", playerScore);
  localStorage.setItem("total_Games", totalGames);
  localStorage.setItem("pRock", p_Rock);
  localStorage.setItem("pPaper", p_Paper);
  localStorage.setItem("pSciss", p_Sciss);
  localStorage.setItem("cRock", c_Rock);
  localStorage.setItem("cPaper", c_Paper);
  localStorage.setItem("cSciss", c_Sciss);
  localStorage.setItem("p_Rock_Stat", pRockStat);
  localStorage.setItem("p_Paper_Stat", pPaperStat);
  localStorage.setItem("p_Sciss_Stat", pScissStat);
  localStorage.setItem("c_Rock_Stat", cRockStat);
  localStorage.setItem("c_Paper_Stat", cPaperStat);
  localStorage.setItem("c_Sciss_Stat", cScissStat);

  document.getElementById("playerStats").innerHTML = localStorage.getItem("player_score");
  document.getElementById("computerStats").innerHTML = localStorage.getItem("computer_score");
  document.getElementById("totalGamesPlayedC").innerHTML = localStorage.getItem("total_Games");
  document.getElementById("totalGamesPlayedP").innerHTML = localStorage.getItem("total_Games");
  document.getElementById("playerRatio").innerHTML = (localStorage.getItem("player_score")+":"+localStorage.getItem("computer_score"));
  document.getElementById("computerRatio").innerHTML = (localStorage.getItem("computer_score")+":"+localStorage.getItem("player_score"));

  if(!pRockStat){
    localStorage.setItem("p_Rock_Stat", 0);
    document.getElementById("prStat").innerHTML = localStorage.getItem("p_Rock_Stat")+"%";
  }
  else{
    document.getElementById("prStat").innerHTML = localStorage.getItem("p_Rock_Stat")+"%";
  }

  if(!cRockStat){
    localStorage.setItem("c_Rock_Stat", 0);
    document.getElementById("crStat").innerHTML = localStorage.getItem("c_Rock_Stat")+"%";
  }
  else{
    document.getElementById("crStat").innerHTML = localStorage.getItem("c_Rock_Stat")+"%";
  }
  if(!pPaperStat){
    localStorage.setItem("p_Paper_Stat", 0);
    document.getElementById("ppStat").innerHTML = localStorage.getItem("p_Paper_Stat")+"%";
  }
  else{
    document.getElementById("ppStat").innerHTML = localStorage.getItem("p_Paper_Stat")+"%";
  }
  if(!cPaperStat){
    localStorage.setItem("c_Paper_Stat", 0);
    document.getElementById("cpStat").innerHTML = localStorage.getItem("c_Paper_Stat")+"%";

  }
  else{
    document.getElementById("cpStat").innerHTML = localStorage.getItem("c_Paper_Stat")+"%";
  }
  if(!pScissStat){
    localStorage.setItem("p_Sciss_Stat", 0);
    document.getElementById("psStat").innerHTML = localStorage.getItem("p_Sciss_Stat")+"%";

  }
  else{
    document.getElementById("psStat").innerHTML = localStorage.getItem("p_Sciss_Stat")+"%";
  }
  if(!cScissStat){
    localStorage.setItem("c_Sciss_Stat", 0);
    document.getElementById("csStat").innerHTML = localStorage.getItem("c_Sciss_Stat")+"%";

  }
  else{
    document.getElementById("csStat").innerHTML = localStorage.getItem("c_Sciss_Stat")+"%";
  }

}






document.getElementById("enter_name_button").addEventListener("click", function(){
  var p_name = document.getElementById("enter_name_input").value;
  if(!p_name){
    showOrNot(document.getElementById("feedback"), true);
    document.getElementById("nameFeedbackBad").innerHTML = "Please enter a name to proceed";
  }

  else{
    showOrNot(document.getElementById("feedback"), true);
    document.getElementById("nameFeedbackBad").innerHTML = "";
    document.getElementById("nameFeedbackGood").innerHTML = "Name successfully saved!";
    localStorage.setItem("player_name", p_name);
    showOrNot(document.getElementById("enter_name"), false);
    showOrNot(document.getElementById("throw_choice"), true);
    updateNames(p_name);
  }

  });


  //playerScore = 0;
  //computerScore = 0;



function showOrNot(div_element, show){
  if(show && div_element.classList.contains("hidden")){
    div_element.classList.remove("hidden");
    div_element.classList.add("visible");
  }

  else if(!show && div_element.classList.contains("visible")){
    div_element.classList.remove("visible");
    div_element.classList.add("hidden");
  }
}

function updateNames(name){
  var name_spots = document.getElementsByClassName("player_name_span");
  for(var i = 0; i<name_spots.length; i++){
    name_spots[i].innerHTML = name;
  }
}

makeToggable(document.getElementById("show_rules_button"), document.getElementById("rules"));
makeToggable(document.getElementById("show_stats_button"), document.getElementById("stats"));

function makeToggable(button_element, div_element){
  button_element.addEventListener("click", function(){
    if(div_element.classList.contains("hidden")){
      div_element.classList.remove("hidden");
      div_element.classList.add("visible");
    }else{
      div_element.classList.remove("visible");
      div_element.classList.add("hidden");
      }
  });
}

function ResultTie(){
  totalGames+=1;
  localStorage.setItem("total_Games", totalGames);
  showOrNot(document.getElementById("game_results"), true);
  document.getElementById("resultsText").innerHTML = "Tie Game!";
}

function computerWins(){
  totalGames+=1;
  localStorage.setItem("total_Games", totalGames);
  computerScore+=1;
  localStorage.setItem("computer_score", computerScore);
  //console.log(localStorage.getItem("computer_score"));
  showOrNot(document.getElementById("game_results"), true);
  document.getElementById("resultsText").innerHTML = "Computer Wins!";
}

function playerWins(){
  totalGames+=1;
  localStorage.setItem("total_Games", totalGames);
  playerScore+=1;
  localStorage.setItem("player_score", playerScore);
  //console.log(localStorage.getItem("player_score"));
  showOrNot(document.getElementById("game_results"), true);
  document.getElementById("resultsText").innerHTML = (" "+ localStorage.getItem("player_name")+ " Wins!");
}


document.getElementById("pick_choice").addEventListener("click", function(){
  document.getElementById("nameFeedbackBad").innerHTML = "";
  document.getElementById("nameFeedbackGood").innerHTML = "";



  console.log("choice played");
  var chances = Math.random();
  console.log(chances);
  var computerThrowChoice;
  var playerThrowChoice = document.getElementById("Player_Throw_Choice").value;

  if(chances<=0.33){
    computerThrowChoice = "Rock";
    document.getElementById("computerSummary").innerHTML = ("The computer chose to throw rock!");
    c_Rock+=1.0;
    var image = document.getElementById("Computer_Picture_Results");
    image.src = "images/Rock1.png";
  }

  if(0.33<chances&&chances<=0.66){
    computerThrowChoice = "Scissors";
    document.getElementById("computerSummary").innerHTML = ("The computer chose to throw scissors!");
    c_Sciss+=1.0;
    var image = document.getElementById("Computer_Picture_Results");
    image.src = "images/Scissors1.png";
  }

  if(0.66<chances&&chances<=1){
    computerThrowChoice = "Paper";
    document.getElementById("computerSummary").innerHTML = ("The computer chose to throw paper!");
    c_Paper+=1.0;
    var image = document.getElementById("Computer_Picture_Results");
    image.src = "images/Paper1.png";
  }

  if(playerThrowChoice== " "){
    document.getElementById("choiceFeedbackBad").innerHTML = ("Please select an object to throw.");
    showOrNot(document.getElementById("choiceFeedbackBad"), true);
    showOrNot(document.getElementById("game_results"), false);
    showOrNot(document.getElementById("throw_choice"), true);
    document.getElementById("Player_Throw_Choice").value = " ";

  }

  if(playerThrowChoice=="Paper"){
    document.getElementById("choiceFeedbackBad").innerHTML = "";
    p_Paper+=1.0;
    document.getElementById("playerSummary").innerHTML = (localStorage.getItem("player_name") + " chose to throw paper!");
    var image = document.getElementById("Player_Picture_Results");
    image.src = "images/Paper2.png";
  }

  if(playerThrowChoice=="Scissors"){
    document.getElementById("choiceFeedbackBad").innerHTML = "";
    p_Sciss+=1.0;
    document.getElementById("playerSummary").innerHTML = (localStorage.getItem("player_name") + " chose to throw scissors!");
    var image = document.getElementById("Player_Picture_Results");
    image.src = "images/Scissors2.png";
  }

  if(playerThrowChoice=="Rock"){
    document.getElementById("choiceFeedbackBad").innerHTML = ""; 
    p_Rock+=1.0;
    document.getElementById("playerSummary").innerHTML = (localStorage.getItem("player_name") + " chose to throw rock!");
    var image = document.getElementById("Player_Picture_Results");
    image.src = "images/Rock2.png";
  }

  if((playerThrowChoice=="Paper" && computerThrowChoice == "Paper")||(playerThrowChoice=="Scissors" && computerThrowChoice == "Scissors")||(playerThrowChoice=="Rock" && computerThrowChoice == "Rock")){
    console.log("Tie");
    showOrNot(document.getElementById("throw_choice"), false);

    ResultTie();
  }

  if((playerThrowChoice =="Paper" && computerThrowChoice=="Scissors")||(playerThrowChoice =="Rock" && computerThrowChoice=="Paper")||(playerThrowChoice =="Scissors" && computerThrowChoice=="Rock")){
    console.log("Computer Wins");
    showOrNot(document.getElementById("throw_choice"), false);

    computerWins();
  }

  if((playerThrowChoice =="Scissors" && computerThrowChoice=="Paper")||(playerThrowChoice =="Paper" && computerThrowChoice=="Rock")||(playerThrowChoice =="Rock" && computerThrowChoice=="Scissors")){
    console.log("Player Wins");
    showOrNot(document.getElementById("throw_choice"), false);

    playerWins();
  }
  updateStatistics();

});

document.getElementById("play_Again").addEventListener("click", function(){
  showOrNot(document.getElementById("game_results"), false);
  showOrNot(document.getElementById("throw_choice"), true);
  document.getElementById("Player_Throw_Choice").value = " ";
});
