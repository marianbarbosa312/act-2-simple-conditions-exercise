let Celsius = 0
basic.forever(function () {
    Celsius = input.temperature()
    if (Celsius == 10) {
        basic.showNumber(10)
        basic.showString("Ski Time!")
    } else if (Celsius == 20) {
        basic.showNumber(20)
        basic.showString("Picnic Time!")
    } else if (Celsius == 30) {
        basic.showNumber(30)
        basic.showString("Beach Time!")
    } else if (Celsius == 40) {
        basic.showNumber(40)
        basic.showString("It is better to stay at home")
    } else {
        basic.showNumber(input.temperature())
    }
})
