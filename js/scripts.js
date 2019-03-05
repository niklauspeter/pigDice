
var score = [];
var score2 = [];
var result1 = [];
var result2 = [];
$(document).ready(function(){
  $("#start").click(function(){
    $(".names").toggle();
    $(".startPage").toggle();

  });
});
    $(document).ready(function(){
    $("#playerNames").submit(function(event){
    event.preventDefault();
    $(".gamePage").toggle();
    $(".names").toggle();
    var user1 = $("#player1Name").val();
    var user2 = $("#player2Name").val();
    $(".gamePage").show();
    $("#playerOne").text(user1);
    $("#playerTwo").text(user2);

  });
});
$(document).ready(function(){
$("#roll").click(function(){
  var randomNum = Math.floor((Math.random()*6)+1);
  $(".diceDisplay").text(randomNum);
  if (randomNum== 1){
    alert("it player 2 turn");
  };
  score.push(randomNum);
  $("#score1").text(score);
});
});
$(document).ready(function(){
$("#hold1").click(function(){
  var sum = score.reduce(function(a,b){
    return a+ b;}, 0);
    result1.push(sum);
    alert(result1);
  });
});
