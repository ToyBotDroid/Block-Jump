let character = document.querySelector('.character')
let block = document.querySelector('.block')
let screen = document.querySelector('.screen')
let displayScore = document.querySelector('.display-score')
let restartBtn = document.querySelector('.restart')


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


document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    jump()
  }
})


let detectContact = setInterval(()=>{
let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('Left'))

if( blockLeft >= 50 && blockLeft <= 100 && characterTop >= 250){
  alert(`You hit the block. You lost \n Your Score : ${score}`)
  block.classList.remove('move')
  clearInterval(scoreIncrement)
}
}, 10)

restartBtn.addEventListener('click', ()=> {
  location.reload()
})



