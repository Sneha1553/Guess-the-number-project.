//selecting elements
var guessnum = document.getElementById("guessnum")
var result = document.getElementById("result")
var Score = document.getElementById("Score")
//generate random number
var randomnum = Math.floor(Math.random() * 10) + 1
var TotalScore = 10

window.check = function ()  {
  var enterednum = Number(guessnum.value)
  if (enterednum == randomnum) {
    console.log("Right")
    result.textContent = "Right"
    alert("YOU WON...")
  } else {
    TotalScore = TotalScore - 1
    Score.textContent = "Score:" + TotalScore
    result.textContent = "Wrong"
  }
}
