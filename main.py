def on_button_pressed_a():
    if 0 < 0:
        pass
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global time
    time = "" + str(hours) + (":" + str(minutes))
    basic.show_string(time)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

hours = 0
minutes = 0
time = ""
ampm = False
time = ""
adjust = 0
minutes = 0
hours = 0