let TotalScore = {computerscore:0 , PlayerScore:0}

function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}


function getResult(playerChoice, computerChoice) {
 

  let score;

  
  if (playerChoice === computerChoice) {
    score = 0
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1


  } else {
    score = -1
  }

  
  return score
}


function showResult(score, playerChoice, computerChoice) {


  let result = document.getElementById('result')

  if(score == -1){
    result.innerText = 'You Lose!'
  }else if(score == 0){
    result.innerText = 'Its a Draw'
  }else{
    result.innerText = 'You Won'
  }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  playerScore.innerText = `YourScore: ${TotalScore['PlayerScore'] }  `
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  
  console.log(playerChoice)
  let computerChoice = getComputerChoice()
  console.log(computerChoice)
  const score = getResult(playerChoice, computerChoice)
  TotalScore['PlayerScore'] += score
  console.log(score)
  console.log(TotalScore)
  const showresult = showResult(score, playerChoice, computerChoice)
  
}


function playGame() {

  let rpsButtons = document.querySelectorAll('.rpsButton')

  

  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(TotalScore )
}

function endGame(TotalScore ){
  TotalScore['computerscore'] = 0
  TotalScore['PlayerScore'] = 0

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')

  result.innerText = ''
  hands.innerText = ''
  playerScore.innerText = ''
  
  
}


playGame()