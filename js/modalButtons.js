
export default function Modal({
    minutesDisplay,
    secondsDisplay,
    buttonLess,
    buttonMore,
    buttonMoon,
    buttonPlay,
    mainForBackgroundColor
}) {

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
    return{
        updateTimerDisplay,
        hideButtons,
        showButtons,
        day, night
    }
}
