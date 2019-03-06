
var score = [];
var score2 = [];
var result1 = [];
var result2 = [];
var finalResult = [];
var finalResult2 = [];
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
//player 1
$(document).ready(function(){
$("#roll").click(function(){
  var randomNum = Math.floor((Math.random()*6)+1);
  $(".diceDisplay").text(randomNum);

  if (randomNum !== 1){
  score.push(randomNum);
  var sum = score.reduce(function(a,b){
    return a+ b;}, 0);
    result1.push(sum);
  $("#score1").text(result1[result1.length-1]);
  finalResult.pushArray(result1);
};
if (randomNum == 1) {
  function empty(){
    score.length = 0;}
    empty();
    $("#score1").text(score);
  };
  if (randomNum== 1){
    alert("it player 2 turn");
    $(".player1").hide();
    $(".player2").show();
  };
  if (result >=100){
    alert(user1 + " has won!");
  };
});
});
$(document).ready(function(){
$("#hold1").click(function(){
    alert("Your current score is" + " " + result1[result1.length-1]);
    $(".player1").hide();
    $(".player2").show();
  });
});
//player 2
$(document).ready(function(){
$("#roll2").click(function(){
  var randomNum = Math.floor((Math.random()*6)+1);
  $(".diceDisplay2").text(randomNum);

  if (randomNum !== 1){
  score2.push(randomNum);
  var sum = score2.reduce(function(a,b){
    return a+ b;}, 0);
    result2.push(sum);
   $("#score2").text(result2[result2.length-1]);
   finalResult2.pushArray(result2);
};
if (randomNum == 1) {
  function empty(){
    score2.length = 0;}
    empty();
    $("#score2").text(score2);
  };
  if (randomNum== 1){
    alert("it player 1 turn");
    $(".player2").hide();
    $(".player1").show();
  };
  if (result >=100){
    alert(user2 + " has won!");
  };
});
});
$(document).ready(function(){
$("#hold2").click(function(){
    alert("Your current score is " + " " +result2[result2.length-1]);
    $(".player2").hide();
    $(".player1").show();
  });
});
