input.onButtonPressed(Button.A, function () {
    if (0 < 0) {
    	
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    time = "" + hours + (":" + ("" + minutes))
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString(time)
})
let hours = 0
let minutes = 0
let time = ""
let adjust = 0
let ampm = false
time = ""
minutes = 0
hours = 0
