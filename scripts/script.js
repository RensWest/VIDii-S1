// JavaScript Document

// Buttons Shell en Shroom
var mushroomButton = document.querySelector('#mushroomBtn');
var shellButton = document.querySelector('#shellBtn');

mushroomButton.addEventListener("click", playAnimationShroom);
var counter = 1;


    // classlist add en remove na 3000ms
function playAnimationShroom() {
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
        setTimeout(() => {
            fotoMario.classList.remove("vergroot");
        }, 3000); // delay van de classlist remove

        // Jeffrey heeft mij hiermee geholpen
        if(counter < 11){
            setTimeout(() =>{

            
            var contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
            var marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')')
            
            contentSelector.classList.add('hidden')
            marioSelector.classList.add('hidden')
            
            counter++
            
            contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
            marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')') 
            
            contentSelector.classList.remove('hidden')
            marioSelector.classList.remove('hidden')
            },1020)
          } 
      }, 2000) // delay van de functie en classlist add
      
      
  };

shellButton.addEventListener("click", playAnimationShell);

function playAnimationShell() {
    var shellImg = document.querySelector('#shellImg');
    shellImg.classList.add('shellAnimation');
    setTimeout(() => {
        shellImg.classList.remove('shellAnimation');
    }, 3000);

    var fotoMario = document.querySelector("main > section:first-of-type li img");
      setTimeout(() => {
        fotoMario.classList.add("verklein");
        setTimeout(() => {
            fotoMario.classList.remove("verklein");
        }, 3000);
        // delay van de animatie
      }, 2000)
};


function playAnimationShell() {
    shellButton.disabled = true; // Button disabelen zodat er niet kan worden geklikt zolang animatie speelt
    var shellImg = document.querySelector('#shellImg'); 
    shellImg.classList.add('shellAnimation');
    setTimeout(() => {
        shellImg.classList.remove('shellIAnimation');
        shellButton.disabled = false; // button weer aan
      }, 3000); // delay van de classlist remove

      var fotoMario = document.querySelector('main > section:first-of-type li img:nth-of-type(' + counter + ')');
      setTimeout(() => {
        fotoMario.classList.add("verklein");
        setTimeout(() => {
            fotoMario.classList.remove("verklein");
        }, 3000); // delay van de classlist remove

        // Jeffrey heeft mij hiermee geholpen
        if(counter < 11){
            setTimeout(() =>{

            
            var contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
            var marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')')
            
            contentSelector.classList.add('hidden')
            marioSelector.classList.add('hidden')
            
            counter--
            
            contentSelector = document.querySelector('ol li:nth-child(' + counter + ')') // update queryselector met counter
            marioSelector = document.querySelector('main > section:first-of-type li img:nth-child(' + counter + ')') 
            
            contentSelector.classList.remove('hidden')
            marioSelector.classList.remove('hidden')
            },2820)
          } 
      }, 2000) // delay van de functie en classlist add
      
      
  };