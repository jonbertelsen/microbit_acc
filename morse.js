let codecount = 0
let codes: number[] = []
let charLength = 0
input.onButtonPressed(Button.AB, function () {
    // basic.showNumber(codes.length) basic.pause(100)
    // basic.showLeds(` . . . . . . . . . . . . . . . . .
    // . . . . . . . . `) basic.pause(100)
    morseChar = 0
    charLength = 0
    for (let value of codes) {
        // basic.showNumber(value)
        if (value == 2 || value == 3) {
            // basic.showNumber(morseChar)
            if (value == 2) {
                basic.showString("|")
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            morseChar += 2 ** charLength
            basic.showString("" + getChar(morseChar))
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            charLength = 0
            morseChar = 0
        } else {
            morseChar += 2 ** charLength * value
            charLength += 1
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(1)
    codes[codecount] = 1
    codecount += 1
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(0)
    codes[codecount] = 0
    codecount += 1
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    radio.sendNumber(3)
    codes[codecount] = 3
    codecount += 1
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendNumber(2)
    codes[codecount] = 2
    codecount += 1
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    radio.sendNumber(3)
    codes[codecount] = 3
    codecount += 1
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let morseChar = 0
codes = []
radio.setTransmitPower(7)
radio.setGroup(1)
codecount = 0
function getChar(n: number) {
    switch (n) {
        case 2: return "E"; break;
        case 3: return "T"; break;
        case 4: return "I"; break;
        case 5: return "A"; break;
        case 6: return "N"; break;
        default: return "X";
    }

}
