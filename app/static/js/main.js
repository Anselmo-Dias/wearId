//@charset "UTF-8";
let navigateToggleImg = false

const headerLinks1 = document.querySelector('.header-links-1')
const headerButton = document.querySelector('#button-menu')
const logout = document.querySelector('.logout')
const navigateButton = document.querySelector('#button-house')
const navigateMenu = document.querySelector('.sub-menu')
const navigateImgCloseMenu = document.querySelector('.close-menu')
const newsletters = document.querySelector('#newsletters')
const buttonSendNewsletters = document.querySelector('#sendNewsletters')

headerButton.addEventListener('click', () => {
  headerLinks1.classList.toggle('visible')
})

logout.addEventListener('click', () => {
  localStorage.removeItem('login')

    window.location.pathname = '/'
})

navigateButton.addEventListener('click', async () => {
  navigateButton.classList.toggle('rotate')
  navigateMenu.classList.toggle('move-out')
})

const swiper = new Swiper('.swiper', {

  loop: true,
  // cssMode: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
  },

  Keyboard: true,

});


