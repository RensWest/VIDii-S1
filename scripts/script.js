// JavaScript Document
console.log("Howdy!");

const mushroomButton = document.getElementById('mushroomBtn');
const mushroomImg = document.getElementById('mushroomImg')

mushroomButton.addEventListener("click", playAnimation);

function playAnimation() {
    // code to be executed
    console.log('test2');
    mushroomImg.classList.add('mushroomAnimation');

  }