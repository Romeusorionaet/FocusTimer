
export default function creatCards() {
    
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
    
      document.querySelector('.card').innerHTML = 
        creatCard("btnForest", "forest", "volumeForest", "audioForest", creatSound("Floresta")) +
        creatCard("btnRain", "rain", "volumeRain", "audioRain", creatSound("Chuva")) +
        creatCard("btnCoffee", "coffeeShop", "volumeCoffee", "audioCoffee", creatSound("Cafeteria")) +
        creatCard("btnFirePlace", "firePlace", "volumeFirePlace", "audioFirePlace", creatSound("Lareira"))
      
     
    
}