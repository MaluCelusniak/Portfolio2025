window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showbacktotopbuttonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

 // verificar se a base esta abaixo da linha

 const sectionEndsAt = sectionTop + sectionHeight
 const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

//  verificar se a base está abaixo da linha alvo
 const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

//  limites da seção
 const sectionId = section.getAttribute('id')
 const menuElement = document.querySelector(`.menu a[href*=${sectionId}] `)

 menuElement.classList.remove('active')
 if (sectionBoundaries) {
   menuElement.classList.add('active')
 }


}

function showNavOnScroll() { 
if (scrollY > 0) {
  navigation.classList.add('scroll')
} else {
  navigation.classList.remove('scroll')
} }

function showbacktotopbuttonOnScroll() {
  if (scrollY > 400) {
    backtotopbutton.classList.add('show')
  } else {
    backtotopbutton.classList.remove('show')
  } }
  
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin:'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
 #home img,
  #home .stats, 
  #services, 
  #services header, 
  #services .card,
  #about,
  #about header,
  #about content
  `)
