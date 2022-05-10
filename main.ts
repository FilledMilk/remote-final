radio.onReceivedValue(function (name, value) {
    if (name == "sonar") {
        sonar = value
        basic.showNumber(sonar)
    }
})
let sonar = 0
radio.setGroup(1)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("f")
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("b")
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("l")
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("r")
    } else if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendString("on")
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendString("off")
    } else if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendString("rsonar")
    } else {
        radio.sendString("s")
    }
})
