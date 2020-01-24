(() => {
// this is a module pattern, also called iife

let allSVGs = document.querySelectorAll(".container");
	bomb = document.querySelector("#bomb")

function logSVG(){
    console.log(this.id);

    this.classList.toggle('selected');
  }


//set up our triggers here
allSVGs.forEach(item => item.addEventListener("click", logSVG));
bomb.addEventListener("click", logSVG)

})();
