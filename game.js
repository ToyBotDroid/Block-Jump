let character = document.querySelector('.character')
let block = document.querySelector('.block')
let screen = document.querySelector('.screen')
let displayScore = document.querySelector('.display-score')

let score = 0;
const scoreIncrement = setInterval(()=>{
    score ++
    displayScore.textContent = score
  }, 100)
  

function jump(){
  character.classList.add('jump')
  setTimeout(()=>{
    character.classList.remove('jump')
  }, 500)
}

screen.addEventListener('click', () => {
  jump()
})

//spacebar event = keyup or keydown
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    jump()
  }
})


let detectContact = setInterval(()=>{
let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('Left'))

if( blockLeft === 50 ){
  alert('you lost')
}

}, 1)


 // clearInterval(scoreIncrement)

/*
to make it responsive

1. vh and vw can be implemented. And for checking the  position of the character and block has to be compared assigning a variable each for the window.getComputedStyle(character).getPropertyValue('top') values

2. or make double the code, which i firmly believe isn't worthy or the right way to code 

*/