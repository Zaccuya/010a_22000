let y = 0
let x = 2
basic.forever(function () {
    y = 0
    x = (-1 - input.acceleration(Dimension.X) + 1000) / 400
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        y += 1
    }
    basic.pause(100)
    basic.clearScreen()
})
