export default () => {
  const carouselNew = document.querySelectorAll('[data-carousel-new]')

  ;[].forEach.call(carouselNew, function (carousel) {

    // slides
    let slides = carousel.querySelectorAll('.slide')
    let totalSlides = slides.length
    let currentSlide = 0

    // dots
    let dots = carousel.querySelector('[data-dots]')
    let dhtml = ''

    for (let i = 0; i < totalSlides; i++) {
      dhtml += `<span>${i}</span>`
    }

    dots.innerHTML = dhtml
    dots.firstChild.classList.add('active')
    let dotItem = dots.querySelectorAll('span')

    dots.addEventListener('click', function (e) {
      var index = Array.prototype.indexOf.call(this.children, e.target)
      if (index !== -1) goToSlide(index)
    })

    // carousel navigation
    const goToSlide = (n) => {
      slides[currentSlide].classList.remove('showing')
      dotItem[currentSlide].classList.remove('active')

      currentSlide = (n + totalSlides) % totalSlides

      slides[currentSlide].classList.add('showing')
      dotItem[currentSlide].classList.add('active')
    }

    const prevSlide = () => {
      goToSlide(currentSlide - 1)
    }

    const nextSlide = () => {
      goToSlide(currentSlide + 1)
    }

    let prev = carousel.querySelector('.prev')
    let next = carousel.querySelector('.next')

    prev.addEventListener('click', (e) => {
      e.preventDefault()
      prevSlide()
    })

    next.addEventListener('click', (e) => {
      e.preventDefault()
      nextSlide()
    })

    // keyboard event
    carousel.onkeydown = function (e) {
      if (e.keyCode === 37) {
        // left arrow
        prevSlide()
      }
      else if (e.keyCode === 39) {
        // right arrow               
        nextSlide()
      }
    }

    // touch events
    let xDown = null
    let yDown = null

    const handleTouchStart = (e) => {
      xDown = e.touches[0].clientX
      yDown = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      if (!xDown || !yDown) {
        return
      }

      let xUp = e.touches[0].clientX
      let yUp = e.touches[0].clientY

      let xDiff = xDown - xUp
      let yDiff = yDown - yUp

      // detect left and right swipes on the carousel
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          // left swipe
          nextSlide()
        } else {
          // right swipe
          prevSlide()
        }
      }

      // reset values
      xDown = null
      yDown = null
    }

    carousel.addEventListener('touchstart', handleTouchStart, false)
    carousel.addEventListener('touchmove', handleTouchMove, false)

  })
}