(() => {
// this is a module pattern, also called iife
const bomb = document.querySelector("#bomb");
	boomer = document.querySelector("#boomer");
	bow = document.querySelector("#bow");
	cap = document.querySelector("#cap");
	fire = document.querySelector("#fire");
	hammer = document.querySelector("#hammer");
	hook = document.querySelector("#hook");
	ice = document.querySelector("#ice");
	potion = document.querySelector("#potion");
	sword = document.querySelector("#sword");

function logSVG(){
    console.log(this.id);
 
  }

function toggleSelected(){
   this.classList.toggle('selected');
}

//set up our triggers here
bomb.addEventListener("click", logSVG);
bomb.addEventListener("click", toggleSelected);
boomer.addEventListener("click", logSVG);
boomer.addEventListener("click", toggleSelected);
bow.addEventListener("click", logSVG);
bow.addEventListener("click", toggleSelected);
cap.addEventListener("click", logSVG);
cap.addEventListener("click", toggleSelected);
fire.addEventListener("click", logSVG);
fire.addEventListener("click", toggleSelected);
hammer.addEventListener("click", logSVG);
hammer.addEventListener("click", toggleSelected);
hook.addEventListener("click", logSVG);
hook.addEventListener("click", toggleSelected);
ice.addEventListener("click", logSVG);
ice.addEventListener("click", toggleSelected);
potion.addEventListener("click", logSVG);
potion.addEventListener("click", toggleSelected);
sword.addEventListener("click", logSVG);
sword.addEventListener("click", toggleSelected);

})();
