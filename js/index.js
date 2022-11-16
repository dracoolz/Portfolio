//css after preload
window.onload = function () {
  setTimeout(appeardiv, 7000);
}
//Div will appeare after 1 sec the window is loaded fully
function appeardiv() {
  document.querySelector('.title1 h1').style.animation = "slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.title1 h1').style.display = "block";
  document.querySelector('.title2 h1').style.animation = "slide-up 1.2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.title2 h1').style.display = "block";
}