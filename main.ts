radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
radio.setGroup(1)
basic.forever(function () {
    RingbitCar.freestyle(yValue + xValue, yValue - xValue)
})
