radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        Recived.push(". ")
    } else {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        Recived.push("- ")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    nr = 0
    for (let index = 0; index < Recived.length; index++) {
        basic.showString("" + (Recived[nr]))
        nr += 1
    }
})
let nr = 0
let Recived: string[] = []
Recived = ["|"]
Recived.push(". ")
