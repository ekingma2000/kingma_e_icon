(() => {
// this is a module pattern, also called iife

const allSVGs = document.querySelector("#bomb, #boomer, #bow, #cap, #fire, #hammer, #hook, #ice, #potion, #sword");

function logSVG(){
    console.log(this.id);
 
  }

function toggleSelected(){
   this.classList.toggle('selected');
}

//set up our triggers here
allSVGs.addEventListener("click", logSVG, toggleSelected);
//bomb.forEach(item => item.addEventListener("click", logSVG))
//boomer.forEach(item => item.addEventListener("click", logSVG))
//bow.forEach(item => item.addEventListener("click", logSVG))
//cap.forEach(item => item.addEventListener("click", logSVG))
//fire.forEach(item => item.addEventListener("click", logSVG))
//hammer.forEach(item => item.addEventListener("click", logSVG))
//hook.forEach(item => item.addEventListener("click", logSVG))
//ice.forEach(item => item.addEventListener("click", logSVG))
//potion.forEach(item => item.addEventListener("click", logSVG))
//sword.forEach(item => item.addEventListener("click", logSVG));

})();
