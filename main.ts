input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Forever)
    Chance = 3
    basic.showNumber(Chance)
    while (Chance == 0) {
    	
    }
})
let Chance = 0
basic.showIcon(IconNames.Heart)
