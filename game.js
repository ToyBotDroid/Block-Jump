let character = document.querySelector('.character')
let block = document.querySelector('.block')
let screen = document.querySelector('.screen')
let displayScore = document.querySelector('.display-score')
let restartBtn = document.querySelector('.restart')
let txt = document.querySelector('h2')


let score = 0;
function startScore(){
  var scoreIncrement = setInterval(()=>{
    score ++
    displayScore.textContent = score
  }, 100)
  block.classList.add('move')
  txt.innerHTML= ``

  
}

function jump(){
  if(character.classList.contains != jump){
      character.classList.add('jump')
  }
  setTimeout(()=>{
    character.classList.remove('jump')
  }, 500)
  
}

screen.addEventListener('click', () => {
  jump()
  startScore()
})


document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    jump()
  }
  startScore()
})

let detectContact = setInterval(()=>{
let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('Left'))

if( blockLeft >= 50 && blockLeft <= 100 && characterTop >= 250){
  txt.innerHTML = `GameOver <p>You Scored : ${score}</p> `
  block.classList.remove('move')

  document.querySelector('.score').innerHTML = `<h5>Restart to start the score </h5>`

}
}, 10)




restartBtn.addEventListener('click', ()=> {
  location.reload()
})



