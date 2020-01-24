(() => {
// this is a module pattern, also called iife
  const SVGs = document.querySelector('container');

function toggleSelected() {
//we want some kind of indecator
//that someone has selected an icon

  debugger;
}


//set up our triggers here
SVGs.addEventListener('click', toggleSelected);
})();
