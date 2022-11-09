// JavaScript Document

// Buttons Shell en Shroom
var mushroomButton = document.querySelector('#mushroomBtn');
var shellButton = document.querySelector('#shellBtn');

mushroomButton.addEventListener("click", playAnimationShroom);
var counter = 1;


// ANIMATIE VAN DE MUSHROOM
function playAnimationShroom() {
  shellButton.classList.remove('invisible');
  if (counter < 11) {
    mushroomButton.disabled = true; // Button disabelen zodat er niet kan worden geklikt zolang animatie speelt
    var mushroomImg = document.querySelector('#mushroomImg');

    mushroomImg.classList.add('mushroomAnimation');
    setTimeout(() => {
      mushroomImg.classList.remove('mushroomAnimation');
      mushroomButton.disabled = false; // button weer aan
    }, 3000); // delay van de classlist remove

    var fotoMario = document.querySelector('main > section:first-of-type li img:nth-of-type(' + counter + ')');
    setTimeout(() => {
      fotoMario.classList.add("vergroot");
      var audio = new Audio('./sounds/smb_powerup.wav');
      audio.play();
      setTimeout(() => {
        fotoMario.classList.remove("vergroot");
      }, 3000); // delay van de classlist remove

      // Jeffrey heeft mij hiermee geholpen

      setTimeout(() => {


        var contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
        var marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')')

        contentSelector.classList.add('hidden')
        marioSelector.classList.add('hidden')

        counter++
        if (counter == 11) {
          mushroomButton.classList.add('invisible')
        }

        contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
        marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')')

        contentSelector.classList.remove('hidden')
        marioSelector.classList.remove('hidden')
      }, 1020)
    }, 2000) // delay van de functie en classlist add

  }
};





// ANIMATIE VAN DE SHELL
shellButton.addEventListener("click", playAnimationShell);


function playAnimationShell() {
  var shellImg = document.querySelector('#shellImg');
  mushroomButton.classList.remove('invisible')

  var fotoMario = document.querySelector('main > section:first-of-type li img:nth-of-type(' + counter + ')');
  if (counter > 1) {
    shellButton.disabled = true; // Button disabelen zodat er niet kan worden geklikt zolang animatie speelt
    shellImg.classList.add('shellAnimation');
    setTimeout(() => {
      shellImg.classList.remove('shellAnimation');
      shellButton.disabled = false; // button weer aan
    }, 3000); // delay van de classlist remove
    setTimeout(() => {
      fotoMario.classList.add("verklein");
      var audio = new Audio('./sounds/smb_mariodie.wav');
      audio.play();
      setTimeout(() => {
        fotoMario.classList.remove("verklein");
      }, 3000); // delay van de classlist remove

      setTimeout(() => {


        var contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
        var marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')')

        contentSelector.classList.add('hidden')
        marioSelector.classList.add('hidden')

        counter--

        if (counter == 1) {
          shellButton.classList.add('invisible')
        }

        contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
        marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')')

        contentSelector.classList.remove('hidden')
        marioSelector.classList.remove('hidden')
      }, 2820)
    }, 2000) // delay van de functie en classlist add
  }
}