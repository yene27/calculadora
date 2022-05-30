input.onButtonPressed(Button.A, function () {
    if (cambio == 0) {
        numero1 += 1
        basic.showNumber(numero1)
    }
    if (cambio == 1) {
        numero2 += 1
        basic.showNumber(numero2)
    }
})
input.onButtonPressed(Button.AB, function () {
    operador += 1
    if (operador == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (operador == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (operador == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (operador == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    operador = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    cambio += 1
    if (cambio == 2) {
        if (operador == 1) {
            basic.showNumber(numero1 + numero2)
        } else {
            if (operador == 2) {
                basic.showNumber(numero1 - numero2)
            } else {
                if (operador == 3) {
                    basic.showNumber(numero1 * numero2)
                } else {
                    basic.showNumber(numero1 / numero2)
                }
            }
        }
    }
})
// Se debe presionar el botón A para escoger el numero 1. Luego presionar A+B para el operador, luego B y pasar a presionar el botón A (escoger el numero 2) y finalmente el botón B
let cambio = 0
let numero2 = 0
let numero1 = 0
let operador = 0
operador = 0
numero1 = 0
numero2 = 0
cambio = 0
