// intro.html ---> Introduction

function enterBtn(){
    const tl = gsap.timeline({defaults:{ease: "power1.out"}, })
    tl.to(".intro-body", {y: "-100%", duration:1, delay:.7})
    tl.fromTo(".signup-login-page" , {opacity:0},{opacity:1,duration:.7})
}


var login = document.querySelector('.login')

function openLogin(){
    login.style.transform = "rotateY(0deg)"
}

function openSignup(){
    login.style.transform = "rotateY(180deg)"
}


function showPassword(){
    var x = document.getElementById('password')
    if(x.type=="password"){
        x.type = "text"
    }
    else{
        x.type = "password"
    }
}

// function playerNameFinder(){

// }



// index.html ---> Game

window.onload = function(){
    
const resetDiv = document.querySelector('.reset')
const playBtn = document.querySelector('.play-button')
playBtn.onclick = startGame
function startGame(){
    const play = document.querySelector('.play')
    const choice = document.querySelector('.choice')
    play.classList.add('fadeOut')
    choice.classList.add('fadeIn')
    resetDiv.classList.add('fadeIn')
}


let pScore = 0
let cScore = 0


const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')
const resetBtn = document.querySelector('.reset-button')
resetBtn.onclick = resetScore
function resetScore(){
    pScore=0
    cScore=0
    playerScore.innerText=pScore
    computerScore.innerText=cScore
    verdictSentence = "Choose an option"
    verdict.innerText=verdictSentence
    myChoice.src = `./assets/rock.png`
    computerChoice.src = `./assets/rock.png`
}



const choices = ["rock.png","paper.png","scissors.png"]
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.onclick = makeYourChoice
paper.onclick = makeYourChoice
scissors.onclick = makeYourChoice

var myChoice = document.getElementById('myChoice')
var computerChoice = document.getElementById('computerChoice')
var verdict = document.getElementById('verdict')
myChoice.addEventListener('animationend', function(){
    this.style.animation = ""
})
computerChoice.addEventListener('animationend', function(){
    this.style.animation = ""
})


function findComputerChoice(){
    const number = Math.round(Math.random()*2)
    computerChoice.src = `./assets/${choices[number]}`
    return number
}


function updateScore(){
    playerScore.innerText=pScore
    computerScore.innerText=cScore
}

function makeYourChoice(){
    setTimeout(() => {
        const compHand = findComputerChoice()
        const playerHand = this.dataset.id
        myChoice.src = `./assets/${choices[playerHand]}`
        compareHand(compHand,playerHand)
    }, 2000);
    myChoice.style.animation = "shakePlayer 2s ease"
    computerChoice.style.animation = "shakeComputer 2s ease"
    
    function compareHand(compHand,playerHand){
        if(playerHand==compHand){
            verdictSentence = "Try again!"
        }
        else if(playerHand==0 && compHand==1){
            verdictSentence = "Laptop win! Paper wrapped rock."
            cScore++
            updateScore()
        }
        else if(playerHand==0 && compHand==2){
            verdictSentence = "You win! Rock broke scissors."
            pScore++
            updateScore()
        }
        else if(playerHand==1 && compHand==0){
            verdictSentence = "You win! Paper wrapped rock."
            pScore++
            updateScore()
        }
        else if(playerHand == 1 &&  compHand == 2){
            verdictSentence = "Laptop win! Scissors cut paper."
            cScore++
            updateScore()
        }
        else if(playerHand == 2 && compHand == 0){
            verdictSentence = "Laptop win! Rock broke scissors."
            cScore++
            updateScore()
        }
        else{
            verdictSentence = "You win! Scissors cut paper."
            pScore++
            updateScore()
        }
        verdict.innerText=verdictSentence
    }
}


}