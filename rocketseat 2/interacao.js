window.addEventListener('scroll', onScroll)
onScroll()



function onScroll() {
 showNavOnScroll()
 showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
  if (scrollY > 0) {
    navigaton.classList.add('scroll')
  } else {
    navigaton.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(
  `#home, 
  #home img, 
  #home .stats, 
  #services, 
  #ervices header, 
  #services .card, 
  #about, 
  #about header, 
  #about .content`
)
