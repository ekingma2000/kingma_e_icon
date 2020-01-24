(() => {
// this is a module pattern, also called iife

allSVGs = document.querySelectorAll(".container");

function logSVG(){
    console.log(this.id);
  }


//set up our triggers here
allSVGs.forEach(item => item.addEventListener("click", logSVG));

})();
