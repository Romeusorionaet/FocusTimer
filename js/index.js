import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonMore,
  buttonLess,
  buttonMoon,
  mainForBackgroundColor
} from "./elements.js"

import Modal from "./modalButtons.js"
import Events from "./eventsButons.js"
import creatCards from "./scriptCards.js"

const cards = creatCards()

const modal = Modal({
  minutesDisplay,
  secondsDisplay,
  buttonLess,
  buttonMore,
  buttonMoon,
  buttonPlay,
  mainForBackgroundColor
})

Events({modal})

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