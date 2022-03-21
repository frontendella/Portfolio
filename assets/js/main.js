/*=============== CARD HOVER ===============*/
const cardHover = document.querySelectorAll('.project__card');

cardHover.forEach((nav, index) => {
  nav.addEventListener('mouseover', (event) => {
    event.preventDefault();
    
    cardHover.forEach(item => {
      item.classList.remove('project__card-active');
    })    

    nav.classList.add('project__card-active');
    
  })
})

/*=============== SCROLLLREVEAL ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,  
  // reset: true
})

sr.reveal(`.hero__content`,)
sr.reveal(`.hero__box`, {delay: 600})
sr.reveal(`.news__card`,{origin: 'right', interval: 100})
sr.reveal(`.project__card, .visual__card`,{origin: 'bottom', interval: 100})
sr.reveal(`.about__content, .visual__text-description, .footer__site`,{origin: 'right'})
sr.reveal(`.nav__logo, .about__tag, .visual__text-title, .footer__join`,{origin: 'left'})



/*=============== Pronunciation ===============*/
let x = document.getElementById("audio-ella");
function playAudio() {
  x.play();
}




