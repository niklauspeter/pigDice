
var score = [];
var score2 = [];
var result1 = [];
var result2 = [];
$(document).ready(function(){
  $("#start").click(function(){
    $(".gamePage").toggle();
    $(".startPage").toggle();
    var user1 = prompt("enter player one's name!");
    var user2 = prompt("enter player two's name!");
    $("#playerOne").text(user1);
    $("#playerTwo").text(user2);

  });
});
$(document).ready(function(){
$("#roll").click(function(){
  var randomNum = Math.floor((Math.random()*6)+1);
  $(".diceDisplay").text(randomNum);
  if (randomNum== 1){
    alert("it player 2 turn")
  };
  score.push(randomNum);
  $("#score1").text(score);

});
});
