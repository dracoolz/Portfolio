//css after preload
window.onload = function () {
  setTimeout(navbarSection, 5300);
  setTimeout(mainTitle, 6200);
  setTimeout(blackBar, 6500);
  setTimeout(navurlSection, 6520);
  setTimeout(bottomIcons, 7700);
}
//Div will appeare after 1 sec the window is loaded fully
function navbarSection() {
//navbar section
  document.querySelector('.navbar .indonesia').style.animation = "slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navbar .indonesia').style.display = "block";
  document.querySelector('.navbar .home').style.animation = "slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navbar .home').style.display = "block";
  document.querySelector('.navbar .porto').style.animation = "slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navbar .porto').style.display = "block";
}

function mainTitle() {
  document.querySelector('.title1 h1').style.animation = "title-slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.title1 h1').style.display = "block";
}

function blackBar() {
  document.querySelector('.navurl').style.animation = "scale-in-ver-center 0.5s ease-in both"
  document.querySelector('.navurl').style.display = "flex"
}

function navurlSection() {
  document.getElementById('work').style.animation = "slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.getElementById('work').style.display = "block";
  document.getElementById('about').style.animation = "slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.getElementById('about').style.display = "block";
  document.getElementById('contact').style.animation = "slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.getElementById('contact').style.display = "block";
  document.querySelector('.navurl .build').style.animation = "slide-up 2.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navurl .build').style.display = "block";
}

function bottomIcons() {
  document.querySelector('.footer-one').style.animation = "opacity-slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.footer-two').style.animation = "opacity-slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.footer-three').style.animation = "opacity-slide-up 2.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.footer-four').style.animation = "opacity-slide-up 3s cubic-bezier(0.65, 0, 0.35, 1) both";
  
  // Mobile
  document.querySelector('.mobileNav .footer-one').style.animation = "opacity-slide-up 1s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.mobileNav .footer-two').style.animation = "opacity-slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.mobileNav .footer-three').style.animation = "opacity-slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.mobileNav .footer-four').style.animation = "opacity-slide-up 2.5s cubic-bezier(0.65, 0, 0.35, 1) both";
}