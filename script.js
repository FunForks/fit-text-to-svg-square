/**
 * script.js
 */
;(function (){
  const text = document.getElementsByTagName("text")[0]
  const input = document.getElementsByTagName("input")[0]

  function resizeToFit() {
    text.textContent = input.value
    // Start too big for the square
    let size = 128
    text.setAttribute("font-size", size)
    let delta = size / 2

    let smallEnough = 1 // ridiculously small, certain to fit
  
    // Starting situation: width or height will be too big
    let bBox = text.getBBox()
    let { x, y, width, height } = bBox

    while (delta > 0.125) {
      if (width > 100 || height > 100) {
        // Make it smaller
        size -= delta     

      } else if (width < 100 || height < 100) {
        // It's not too big, but perhaps it could be bigger
        smallEnough = size // remember that this size fits
        size += delta // might now be too big
      }

      resize(size)

      delta /= 2
    }

    function resize(size) {
      text.setAttribute("font-size", size)

      // After resizing
      bBox = text.getBBox()
      x = bBox.x // edge of text box, including some padding
      y = bBox.y
      width = bBox.width // includes padding to left and right
      height = bBox.height

      const yNow = text.getAttribute("y")
      const yGap = (100 - height) / 2
      const adjustY = y - yGap
      const newY = yNow - adjustY
      text.setAttribute("y", newY)

      const xNow = text.getAttribute("x") // where text starts
      const xGap = (100 - width) / 2 // where bBox should start
      const adjustX = xNow - x // offset from xGap to text.x
      const newX = xGap + adjustX
      text.setAttribute("x", newX)
    }

    // Ensure that everything fits inside, but maybe too small
    if (width > 100 || height > 100) {
      resize(smallEnough)
    }
  }

  input.addEventListener("keyup", resizeToFit)

  resizeToFit()
})()

