//css after preload
window.onload = function () {
  setTimeout(navbarSection, 5300);
  setTimeout(mainTitle, 6200);
  setTimeout(blackBar, 6500);
  setTimeout(navurlSection, 6520);
  setTimeout(bottomText, 7700);
}
//Div will appeare after 1 sec the window is loaded fully
//navbar section
function navbarSection() {
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

function bottomText() {
  document.querySelector('.navfoot .footer-one').style.animation = "opacity-slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navfoot .footer-one').style.display = "block";
  document.querySelector('.navfoot .footer-two').style.animation = "slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navfoot .footer-two').style.display = "block";
}


//main3 accordion effect
const skillsAcc = document.querySelectorAll(".skills");

skillsAcc.forEach((skill) => {
  skill.addEventListener("click",() => {
    skill.classList.toggle("active");
  })
})

//main4 Infinity carousel effect
const gameButton = document.querySelector(".main4 .interestCarousel .game");
const gameDetailButton = document.querySelector(".main4 .gamingDetail");
const musicButton = document.querySelector(".main4 .interestCarousel .music");
const musicDetailButton = document.querySelector(".main4 .musicDetail");

gameButton.addEventListener('click', () => {
  gameButton.style.color = "black";
  musicButton.style.color = null;
  gameDetailButton.style.display = null;
  musicDetailButton.style.display = "none";
});

musicButton.addEventListener('click', () => {
  gameButton.style.color = null;
  musicButton.style.color = "black";
  gameDetailButton.style.display = "none";
  musicDetailButton.style.display = "flex";
});
