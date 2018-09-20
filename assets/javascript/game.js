var randomNumber;
var wins;
var losses;
var random1;
var random2;
var random3;
var random4;
var score;

//page load conditions
//function for setting random numbers to objective
//functions for setting crystals to random #
$(document).ready(function () {
  wins = 0;
  losses = 0;
  random1 = 0;
  random2 = 0;
  random3 = 0;
  random4 = 0;
  score = 0;

  $("#wins").append(wins);
  $("#losses").append(losses);
  // $("#score").append(score);

  randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
  console.log(randomNumber);
  $("#randomNumber").append(randomNumber);

  random1 = Math.floor(Math.random() * (12 - 3) + 3);
  random2 = Math.floor(Math.random() * (10 - 3) + 3);
  random3 = Math.floor(Math.random() * (5 - 1) + 1);
  random4 = Math.floor(Math.random() * (1 - 1) + 1);

  console.log("random1: " + random1);
  console.log("random2: " + random2);
  console.log("random3: " + random3);
  console.log("random4: " + random4);


  $("#random1").click(function () {
    score = score += random1;
    console.log(score);
    $("#score").replaceWith(score);
    win();
  })
  $("#random2").click(function () {
    score = score += random2;
    console.log(score);
    $("#score").replaceWith(score);
    win();
  })
  $("#random3").click(function () {
    score = score += random3;
    console.log(score);
    $("#score").replaceWith(score);
    win();
  })
  $("#random4").click(function () {
    score = score += random4;
    console.log(score);
    $("#score").replaceWith(score);
    win();
  })

  function win() {
    if (score === randomNumber) {
      wins++;
      $("#wins").replaceWith(wins);
      console.log("you won");
      reset()
    }
    lose();
  }


  function lose() {
    if (score > randomNumber) {
      losses++;
      $("#losses").replaceWith(losses);
      console.log("you lose");
      reset();
    }
  }

  function reset() {
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    console.log(randomNumber);
    $("#randomNumber").replaceWith(randomNumber);

    random1 = Math.floor(Math.random() * (12 - 3) + 3);
    random2 = Math.floor(Math.random() * (10 - 3) + 3);
    random3 = Math.floor(Math.random() * (5 - 1) + 1);
    random4 = Math.floor(Math.random() * (1 - 1) + 1);

    console.log("random1: " + random1);
    console.log("random2: " + random2);
    console.log("random3: " + random3);
    console.log("random4: " + random4);

    score = 0;
  }

})
