// JavaScript Document

// Buttons Shell en Shroom
var mushroomButton = document.querySelector('#mushroomBtn');
var mushroomImg = document.querySelector('#mushroomImg');
var shellButton = document.querySelector('#shellBtn');
var shellImg = document.querySelector('#shellImg');

mushroomButton.addEventListener("click", playAnimationShroom);

    // classlist add en remove na 3000ms
function playAnimationShroom() {
    mushroomImg.classList.add('mushroomAnimation');
    setTimeout(() => {
        mushroomImg.classList.remove('mushroomAnimation');
      }, 3000)
  };

shellButton.addEventListener("click", playAnimationShell);

function playAnimationShell() {
    shellImg.classList.add('shellAnimation');
    setTimeout(() => {
        shellImg.classList.remove('shellAnimation');
    }, 3000)
};

// foto/titel/tekst aanpassen op groter/kleiner worden
        // var hierFotoMario = document.querySelector("main section img");
        // var hierTitelMario = document.querySelector("ol li h2");
        // var hierTekstMario = document.querySelector("ol li p");