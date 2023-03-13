input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    soundExpression.mysterious.playUntilDone()
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Asleep)
    soundExpression.yawn.playUntilDone()
})
basic.showIcon(IconNames.Asleep)
soundExpression.yawn.playUntilDone()
basic.forever(function () {
	
})
