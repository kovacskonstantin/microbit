input.onButtonPressed(Button.A, function () {
    hang += 1
})
input.onButtonPressed(Button.B, function () {
    hang += -1
})
let hang = 0
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        if (hang < 5) {
            hang += 1
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (0 < hang) {
            hang += -1
        }
    }
    if (hang == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hang == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (hang == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            . # . . .
            `)
    }
    if (hang == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (hang == 4) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (hang == 5) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    }
}
