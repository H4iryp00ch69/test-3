radio.onReceivedString(function (receivedString) {
    if (Signal == 1) {
        Signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    }
})
let Signal = 0
let SAFE = 9
radio.setGroup(1)
radio.setTransmitPower(1)
if (input.buttonIsPressed(Button.A)) {
    SAFE = 0
} else if (input.buttonIsPressed(Button.B)) {
    SAFE = 1
}
basic.showString("please press button after this...")
if (input.buttonIsPressed(Button.A)) {
    SAFE = 0
} else if (input.buttonIsPressed(Button.B)) {
    SAFE = 1
} else {
    SAFE = 0
    basic.showString("Nothing pressed. U are Zombie")
}
basic.forever(function () {
    while (SAFE == 1) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        if (Signal == -60) {
            SAFE = 0
        }
    }
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        . # # # .
        . . . . .
        `)
    radio.sendString("1")
    basic.pause(200)
})
