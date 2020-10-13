let contador = 0
input.onButtonPressed(Button.A, function () {
    contador += 1
})
input.onButtonPressed(Button.B, function () {
    contador += -1
})
basic.forever(function () {
    while (contador < 10) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    while (contador > 10) {
        basic.showIcon(IconNames.Sad)
    }
})
