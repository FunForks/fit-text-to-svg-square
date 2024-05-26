/**
 * script.js
 */
;(function (){
  const text = document.getElementsByTagName("text")[0]
  const outline = document.getElementById("outline")
  const input = document.getElementsByTagName("input")[0]

  function resizeToFit() {
    text.textContent = input.value
    let size = text.getAttribute("font-size")
    console.log("size:", size);
    let delta = size / 2
    
  
    const bBox = text.getBBox()
    const { x, y, width, height } = bBox
    console.log("bBox:", bBox);

    const yNow = text.getAttribute("y")
    const yGap = (100 - height) / 2
    const adjustY = y - yGap
    const newY = yNow - adjustY
    text.setAttribute("y", newY)

    const xNow = text.getAttribute("x")
    const xGap = (100 - width) / 2
    const adjustX = x - xGap
    const newX = xNow - adjustX
    text.setAttribute("x", newX)

    ;(function (){
      const bBox = text.getBBox()
      const { x, y, width, height } = bBox

      outline.setAttribute("x", x)
      outline.setAttribute("y", y)
      outline.setAttribute("width", width)
      outline.setAttribute("height", height)
    })()
  }

  input.addEventListener("keyup", resizeToFit)

  resizeToFit()
})()

