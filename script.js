/**
 * script.js
 */
;(function (){
  const text = document.getElementsByTagName("text")[0]
  const outline = document.getElementById("outline")
  const rect = text.getBoundingClientRect()
  console.log("rect:", rect);

  const bBox = text.getBBox()
  const { x, y, width, height } = bBox
  console.log("bBox:", bBox);

  const yNow = text.getAttribute("y")
  const gap = (100 - height) / 2
  const adjustY = y - gap
  const newY = yNow - adjustY
  text.setAttribute("y", newY)

  ;(function (){
    const bBox = text.getBBox()
    const { x, y, width, height } = bBox

    outline.setAttribute("x", x)
    outline.setAttribute("y", y)
    outline.setAttribute("width", width)
    outline.setAttribute("height", height)
  })()
})()

