radio.onReceivedString(function (receivedString) {
    Signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let Signal = 0
let display = grove.createDisplay(DigitalPin.P1, DigitalPin.P14)
let kills = 0
let SAFE = 9
radio.setGroup(72)
radio.setTransmitPower(1)
basic.pause(2000)
while (SAFE == 9) {
    if (input.buttonIsPressed(Button.A)) {
        SAFE = 0
    } else if (input.buttonIsPressed(Button.B)) {
        SAFE = 1
    }
}
basic.forever(function () {
    while (SAFE == 1 && led.brightness() < 8) {
        led.plotBarGraph(
        Math.map(Signal, -95, -42, 0, 9),
        9
        )
        radio.sendNumber(1)
    }
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        . # # # .
        . . . . .
        `)
    radio.sendString("1")
    display = kills
    basic.pause(200)
})
basic.forever(function () {
    if (led.brightness() < 8) {
        kills += 1
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
