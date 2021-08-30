const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 271) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})

window.addEventListener('scroll', function () {
  if (window.scrollY >= 4387) {
    backToTop.classList.add('light')
  } else {
    backToTop.classList.remove('light')
  }
})
