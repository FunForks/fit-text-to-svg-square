# Fit Text to SVG Square #

[Demo](https://funforks.github.io/fit-text-to-svg-square) of how to set the `font-size` and `x` and `y` co-ordinates of an SVG `<text>` element, so that the text fits neatly inside a square.

The script starts by setting a font-size that is too big, and then adjusts the font-size down or up by increments that reduce by half each time. At each iteration, it checks the current width and height of the text's bounding box, and adjust the resize direction accordingly.

Each time the text is smaller than the square, the script remembers the font-size as `smallEnough`.

It's possible that the last iteration makes the text just slightly too big for the square. If so, the most recent value of
`smallEnough` is used. This guarantees that the text will not overflow the square.