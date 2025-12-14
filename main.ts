function GitHub () {
    pins.comment(pins.pins_text("calliope-net/7Segment-Pins-Keypad-81"))
    pins.comment(pins.pins_text("7 Segment Anzeige gelb mit Kabel, I2C Qwiic Keypad"))
    pins.comment(pins.pins_text("1 Erweiterung laden:"))
    pins.comment(pins.pins_text("calliope-net/pins"))
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    z += -1
    select(z)
    basic.setLedColor(0x00ffff)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
    for (let Index = 0; Index <= 15; Index++) {
        select(Index)
        basic.pause(1000)
    }
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    z += 1
    select(z)
    basic.setLedColor(0x7f00ff)
})
function select (zahl: number) {
    if (zahl == 0) {
        Ziffer(1, 1, 1, 1, 1, 1, 0)
    } else if (zahl == 1) {
        Ziffer(0, 1, 1, 0, 0, 0, 0)
    } else if (zahl == 2) {
        Ziffer(1, 1, 0, 1, 1, 0, 1)
    } else if (zahl == 3) {
    	
    } else if (false) {
    	
    } else {
        Ziffer(0, 0, 0, 0, 0, 0, 1)
    }
}
function Ziffer (A: number, B: number, C: number, D: number, E: number, F: number, G: number) {
    pins.digitalWritePin(DigitalPin.C4, A)
    pins.digitalWritePin(DigitalPin.C5, B)
    pins.digitalWritePin(DigitalPin.C6, C)
    pins.digitalWritePin(DigitalPin.C7, D)
    pins.digitalWritePin(DigitalPin.C8, E)
    pins.digitalWritePin(DigitalPin.C9, F)
    pins.digitalWritePin(DigitalPin.C10, G)
}
let keycode = 0
let z = 0
led.enable(false)
z = 0
select(z)
basic.setLedColor(0x0000ff)
loops.everyInterval(500, function () {
    if (pins.keypadConnected()) {
        keycode = pins.keypad_read()
        if (keycode != 0) {
            z = parseFloat(String.fromCharCode(keycode))
            select(z)
            basic.setLedColor(0xffffff)
        }
    }
})
