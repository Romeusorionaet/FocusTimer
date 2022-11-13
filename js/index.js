import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonReset,
  buttonMoon,
  mainForBackgroundColor
} from "./elements.js"

let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function hideButtons() {
  buttonPlay.classList.add('hide')
  buttonMore.classList.add('hide')
  buttonLess.classList.add('hide')
}

function showButtons() {
  buttonPlay.classList.remove('hide')
  buttonMore.classList.remove('hide')
  buttonLess.classList.remove('hide')
}

function day() {
  mainForBackgroundColor.style.backgroundColor = ""
  buttonMoon.style.opacity = .5
}

function night() {
  mainForBackgroundColor.style.backgroundColor = "black"
  buttonMoon.style.opacity = 1
}

buttonMoon.addEventListener('click', function() {
  mainForBackgroundColor.style.backgroundColor == "black" ? day() : night()
})

buttonMore.addEventListener('click', function chooseTimer() {
    let moreMinutes = 5
    let minutes = Number(minutesDisplay.textContent)
    if(minutes >= 60){
        minutes = 0
    }
    
    minutesDisplay.innerHTML = moreMinutes

    minutesDisplay.textContent = String(minutes + moreMinutes).padStart(2, "0")
})

buttonLess.addEventListener('click', function chooseTimer() {
    let moreMinutes = -5
    let minutes = Number(minutesDisplay.textContent)
    if(minutes <= 0){
        minutes = 60
    }

    minutesDisplay.innerHTML = moreMinutes

    minutesDisplay.textContent = String(minutes + moreMinutes).padStart(2, "0")
})

buttonPlay.addEventListener('click', function countDown() {
    hideButtons()

    timerTimeOut = setTimeout(function() {
      
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      updateTimerDisplay(minutes, 0)

      if (minutes <= 0) {
        showButtons()
        //função de disparar som
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
      updateTimerDisplay(minutes, String(seconds - 1))
      countDown()
    }, 1000)  
})

buttonReset.addEventListener('click', function resetTimer() {
  secondsDisplay.textContent = "00"
  minutesDisplay.textContent = "00"
  showButtons()
})

buttonStop.addEventListener('click', function stop() {
  clearTimeout(timerTimeOut)
  buttonPlay.classList.remove('hide')
})

//
function creatSound(sound) {
  return `
    <source src="./soud/${sound}.wav" type="audio/wav" />
    <p>Your browser does not support this audio format.</p>
  `
}

function creatCard(button, imagem, volume, sound, fontSound) {
  return `
    <button class="${button}">
        <img src="./img/${imagem}.png">
        <input class="hide" id="${volume}" type="range" min="0" value="1" max="1" step="0.1">
    </button>
    <audio class="${sound} hide" controls="controls" loop>
        ${fontSound}
    </audio>
`
}
// pasando valores para a função creatCard
document.querySelector('.card').innerHTML = 
  creatCard("btnForest", "forest", "volumeForest", "audioForest", creatSound("Floresta")) +
  creatCard("btnRain", "rain", "volumeRain", "audioRain", creatSound("Chuva")) +
  creatCard("btnCoffee", "coffeeShop", "volumeCoffee", "audioCoffee", creatSound("Cafeteria")) +
  creatCard("btnFirePlace", "firePlace", "volumeFirePlace", "audioFirePlace", creatSound("Lareira"))

// variáveis para parte dos cards
const buttonForest = document.querySelector('.btnForest')
const buttonRain = document.querySelector('.btnRain')
const buttonCoffee = document.querySelector('.btnCoffee')
const buttonFirePlace = document.querySelector('.btnFirePlace')

const audioForest = document.querySelector('.audioForest')
const audioRain = document.querySelector('.audioRain')
const audioCoffee = document.querySelector('.audioCoffee')
const audioFirePlace = document.querySelector('.audioFirePlace')

const volumeForest = document.querySelector('#volumeForest')
const volumeRain = document.querySelector('#volumeRain')
const volumeCoffee = document.querySelector('#volumeCoffee')
const volumeFirePlace = document.querySelector('#volumeFirePlace')

let backgroundColorPattern = "rgba(24, 22, 54, 0.342)"

// eventos de click no botão
buttonForest.addEventListener('click', function () {
if (audioForest.paused){
  audioForest.play()
  audioRain.pause() 
  audioCoffee.pause()
  audioFirePlace.pause()

  volumeForest.classList.remove('hide')
  volumeRain.classList.add('hide')
  volumeCoffee.classList.add('hide')
  volumeFirePlace.classList.add('hide')

  buttonForest.style.backgroundColor = "rgb(135, 250, 120)"

  buttonRain.style.backgroundColor = backgroundColorPattern
  buttonCoffee.style.backgroundColor = backgroundColorPattern
  buttonFirePlace.style.backgroundColor = backgroundColorPattern
}else {
  audioForest.pause()
  volumeForest.classList.add('hide')
  buttonForest.style.backgroundColor = backgroundColorPattern
}
})

buttonRain.addEventListener('click', function () {
  if (audioRain.paused){
    audioRain.play()
    audioForest.pause()
    audioCoffee.pause()
    audioFirePlace.pause()

    volumeRain.classList.remove('hide')
    volumeForest.classList.add('hide')
    volumeCoffee.classList.add('hide')
    volumeFirePlace.classList.add('hide')

    buttonRain.style.backgroundColor = "rgb(111, 114, 250)"

    buttonForest.style.backgroundColor = backgroundColorPattern
    buttonCoffee.style.backgroundColor = backgroundColorPattern
    buttonFirePlace.style.backgroundColor = backgroundColorPattern
  }else {
    audioRain.pause();
    volumeRain.classList.add('hide')
    buttonRain.style.backgroundColor = backgroundColorPattern
  }
})

buttonCoffee.addEventListener('click', function () {
  if (audioCoffee.paused){
    audioCoffee.play()
    audioRain.pause()
    audioForest.pause()
    audioFirePlace.pause()
    buttonCoffee.style.backgroundColor = "rgb(181, 94, 150)"

    volumeCoffee.classList.remove('hide')
    volumeForest.classList.add('hide')
    volumeRain.classList.add('hide')
    volumeFirePlace.classList.add('hide')

    buttonForest.style.backgroundColor = backgroundColorPattern
    buttonRain.style.backgroundColor = backgroundColorPattern
    buttonFirePlace.style.backgroundColor = backgroundColorPattern
  }else {
    audioCoffee.pause();
    volumeCoffee.classList.add('hide')
    buttonCoffee.style.backgroundColor = backgroundColorPattern
  }
})

buttonFirePlace.addEventListener('click', function () {
  if (audioFirePlace.paused){
    audioFirePlace.play()
    audioCoffee.pause()
    audioRain.pause()
    audioForest.pause()
    buttonFirePlace.style.backgroundColor = "rgb(251, 214, 150)"

    volumeFirePlace.classList.remove('hide')
    volumeForest.classList.add('hide')
    volumeRain.classList.add('hide')
    volumeCoffee.classList.add('hide')

    buttonForest.style.backgroundColor = backgroundColorPattern
    buttonRain.style.backgroundColor = backgroundColorPattern
    buttonCoffee.style.backgroundColor = backgroundColorPattern
  }else {
    audioFirePlace.pause();
    volumeFirePlace.classList.add('hide')
    buttonFirePlace.style.backgroundColor = backgroundColorPattern
  }
})
// eventos que controla volume pelo input 
volumeForest.addEventListener('input', function () {
  audioForest.volume = volumeForest.value,
  audioForest.pause()
})

volumeRain.addEventListener('input', function () {
  audioRain.volume = volumeRain.value
  audioRain.pause()
})

volumeCoffee.addEventListener('input', function () {
  audioCoffee.volume = volumeCoffee.value
  audioCoffee.pause()
})
volumeFirePlace.addEventListener('input', function () {
  audioFirePlace.volume = volumeFirePlace.value
  audioFirePlace.pause()
})
   
