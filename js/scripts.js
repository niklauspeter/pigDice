



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
  var randomNum = Math.random()*6;
  var roundedNum = Math.floor(randomNum);
  $(".dice1").text(roundedNum);
  var result= 0;
  if (roundedNum !==1){
    var newScore = (roundedNum+result);
    $("#score1").text(newScore);
  };
  if (roundedNum ==1){
    alert("you have got a 1, its player 2's turn")
  };

});
});
