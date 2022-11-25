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

export default function Events({modal}) {

    buttonMoon.addEventListener('click', function() {
        mainForBackgroundColor.style.backgroundColor == "black" ? modal.day() : modal.night()
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
          modal.hideButtons()
      
          timerTimeOut = setTimeout(function() {
            
            let seconds =  Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
      
            modal.updateTimerDisplay(minutes, 0)
      
            if (minutes <= 0) {
              modal.showButtons()
              return
            }
        
            if( seconds <= 0 ) {
              seconds = 60
              --minutes
            }
            modal.updateTimerDisplay(minutes, String(seconds - 1))
            countDown()
          }, 1000)  
      })
      
      buttonReset.addEventListener('click', function resetTimer() {
        secondsDisplay.textContent = "00"
        minutesDisplay.textContent = "00"
        modal.showButtons()
      })
      
      buttonStop.addEventListener('click', function stop() {
        clearTimeout(timerTimeOut)
        buttonPlay.classList.remove('hide')
      })
}