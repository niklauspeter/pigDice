
var score = [];
var score2 = [];
var result1 = [];
var result2 = [];

$(document).ready(function(){
  $("#start").click(function(){
    $(".names").fadeIn();
    $(".startPage").fadeOut();
    $(".rules").fadeOut();

  });
});
$(document).ready(function(){
  $("#rulbtn").click(function(){
    $(".rules").fadeIn();
  });
});
$(document).ready(function(){
  $("#backbtn").click(function(){
    $(".rules").fadeOut();

  });
});
$(document).ready(function(){
  $("#homebtn").click(function(){
    $(".startPage").fadeIn();
    $(".names").fadeOut();
    $(".gamePage").fadeOut();
    $(".rules").fadeOut();
  });
});
    $(document).ready(function(){
    $("#playerNames").submit(function(event){
    event.preventDefault();
    $(".gamePage").toggle();
    $(".names").toggle();
    $(".rules").fadeOut();
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
    $(".player1").hide();
    $(".player2").show();
  };
  if (randomNum !== 1){
  score.push(randomNum);
  $("#score1").text(score2);
};
});
});
$(document).ready(function(){
$("#hold1").click(function(){

  var sum = score.reduce(function(a,b){
    return a+ b;}, 0);
    result1.push(sum);
    alert(result1);
    $(".player1").hide();
    $(".player2").show();
  });
});
$(document).ready(function(){
$("#roll2").click(function(){
  var randomNum = Math.floor((Math.random()*6)+1);
  $(".diceDisplay2").text(randomNum);
  if (randomNum== 1){
    alert("it player 1's turn");
    $(".player2").hide();
    $(".player1").show();
  };
  if (randomNum !== 1){
  score2.push(randomNum);
  $("#score2").text(score2);
};
});
});
$(document).ready(function(){
$("#hold2").click(function(){
  var sum = score2.reduce(function(a,b){
    return a+ b;}, 0);
    result2.push(sum);
    alert(result2);
    $(".player2").hide();
    $(".player1").show();
  });
});
