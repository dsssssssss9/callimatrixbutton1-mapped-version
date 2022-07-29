modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showIcon(IconNames.House)
    colorbit_51bit.showStringColor("Hi", colorbit.colors(BitColors.Purple))
    basic.pause(1000)
    colorbit_51bit.setBrightness(Math.map(modules.potentiometer2.position(), 0, 100, 0, 255))
    colorbit_51bit.show()
})
modules.potentiometer2.onPositionChangedBy(5, function () {
    basic.showNumber(Math.round(modules.potentiometer2.position()))
    colorbit_51bit.showIntColor(Math.map(modules.potentiometer2.position(), 0, 100, 0, 255), colorbit.colors(BitColors.Yellow))
    colorbit_51bit.show()
})
let colorbit_51bit: colorbit.Strip = null
basic.showIcon(IconNames.Yes)
colorbit_51bit = colorbit.initColorBit(DigitalPin.P1, BitColorMode.RGB)
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
basic.pause(1000)
colorbit_51bit.show()
colorbit_51bit.clear()
