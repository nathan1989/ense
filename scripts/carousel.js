export default () => {
    console.log('carousel')
    // carousel elements
    const carousel = document.querySelector('[data-carousel]')

    if(carousel !== null){ // if the carousel exists
      var slides = carousel.querySelectorAll('.slide')
      var slidesTotal = slides.length
      var currentSlide = 0

      // set up dots
      var dots = document.getElementById('dots')
      var dhtml = ''

      for (var i = 0; i < slidesTotal; i++) {
        dhtml += '<span>' + (i + 1) + '</span>'
      }

      dots.innerHTML = dhtml

      dots.firstChild.className = 'active'

      var dbuttons = dots.querySelectorAll('span')

      // navigate to carousel image
      var goToSlide = function(n){
        slides[currentSlide].className = 'slide'
        dbuttons[currentSlide].className = ''

        currentSlide = (n + slidesTotal) % slidesTotal
        slides[currentSlide].className = 'slide showing'
        dbuttons[currentSlide].className = 'active'
      }

      const prevSlide = () => {
        goToSlide(currentSlide - 1)
      }

      const nextSlide = () => {
        goToSlide(currentSlide + 1)
      }

      var prev = document.getElementById('prev')
      var next = document.getElementById('next')

      prev.addEventListener('click', function(e){
        e.preventDefault()
        prevSlide()
      })

      next.addEventListener('click', function(e){
        e.preventDefault()
        nextSlide()
      })

      // keyboard event
      document.onkeydown = function(e){
        e = e || window.event            

        if (e.keyCode === 37) {
           // left arrow
           prevSlide()
        }
        else if (e.keyCode === 39) {
           // right arrow               
           nextSlide()
        }
      }

      // dots
      /*jshint loopfunc: true */ // needed for jshint to allow function within loop
      for(var k = 0; k < dbuttons.length; k++){
        dbuttons[k].onclick = (function(n){
          return function(){
            goToSlide(n)
          }
        })(k)
      }

      // touch events
      var xDown = null
      var yDown = null

      const handleTouchStart = (e) => {
        xDown = e.touches[0].clientX
        yDown = e.touches[0].clientY
      }

      const handleTouchMove = (e) => {
        if(!xDown || !yDown){
          return
        }

        var xUp = e.touches[0].clientX
        var yUp = e.touches[0].clientY

        var xDiff = xDown - xUp
        var yDiff = yDown - yUp

        // detect left and right swipes on the carousel
        if(Math.abs(xDiff) > Math.abs(yDiff)){
          if(xDiff > 0){
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
    }
}