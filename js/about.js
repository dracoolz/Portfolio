//css after preload
window.onload = function () {
  setTimeout(navbarSection, 5300);
  setTimeout(mainTitle, 6200);
  setTimeout(blackBar, 6500);
  setTimeout(navurlSection, 6520);
  setTimeout(bottomText, 7700);
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

function bottomText() {
  document.querySelector('.navfoot .footer-one').style.animation = "opacity-slide-up 1.5s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navfoot .footer-one').style.display = "block";
  document.querySelector('.navfoot .footer-two').style.animation = "slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both";
  document.querySelector('.navfoot .footer-two').style.display = "block";
}

// IntersectionObserver
if(!!window.IntersectionObserver){
  let n=1;
  const options = {
    threshold: 1
  };
  let count = document.querySelector('#count');
  let pagesTitle = document.querySelector('#pageTitle')
  let observer = new IntersectionObserver((entries, observer) => { 
    entries.forEach(entry => {
      if(entry.isIntersecting){
        if (entry.target.offsetTop > 4059) {
          count.textContent= '05/05';
          pagesTitle.textContent = 'Epilogue';
        }
        else if (entry.target.offsetTop > 3064) {
          count.textContent= '04/05';
          pagesTitle.textContent = 'Interest';
        }
        else if (entry.target.offsetTop > 2070) {
          count.textContent= '03/05';
          pagesTitle.textContent = 'Skills';
        }
        else if (entry.target.offsetTop > 1075) {
          count.textContent= '02/05';
          pagesTitle.textContent = 'Lore';
        }
        else if (entry.target.offsetTop < 1074) {
          count.textContent= '01/05';
          pagesTitle.textContent = 'The Beginning';
        }
      }
    });
  }, options);
  document.querySelectorAll('.pages .header').forEach(p => { observer.observe(p) });
}

// Infinity carousel effect
const gameButton = document.querySelector(".main4 .interestCarousel .game");
const gameDetail = document.querySelector(".main .gaming");
const musicButton = document.querySelector(".main4 .interestCarousel .music");
const musicDetail = document.querySelector(".main4 .music");

gameButton.addEventListener('click', () => {
  gameButton.style.color = "black";
  musicButton.style.color = "#adb5bd";
});

musicButton.addEventListener('click', () => {
  gameButton.style.color = "#adb5bd";
  musicButton.style.color = "black";
});