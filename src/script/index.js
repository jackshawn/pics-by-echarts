var curvejs = require('curvejs')

var Stage = curvejs.Stage,
	Curve = curvejs.Curve,
	motion = curvejs.motion,
	stage = new Stage(document.getElementById('myCanvas'))

var text = {
	bu: [
		[0, 35, 120, -25, 100, 50, 10, 90],
		[60, 120, 60, 50, 60, 50, 100, 100]
	],
	zheng: [
		[10, 10, 90, 0, 0, 90, 50, 75],
		[10, 75, 0, 120, 10, 150, 90, 120]
	],
	jing: [
		[20, 10, 0, 70, 35, 70, 20, 135],
		[45, 20, 75, 0, 90, 10, 45, 75],
		[65, 50, 75, 55, 75, 55, 90, 60],
		[60, 85, 100, 85, 10, 120, 100, 120]
	]
}

var addCurve = function (curveArr, options) {
	var option = Object.assign({
		color: '#22CAB3',
		x: 0,
		data:{angle: 0, r: 4, step: Math.PI / 50},
		motion: curvejs.motion.dance,
		points: []
	},options)
	for (var i = 0; i < curveArr.length; i++) {
		option.points = curveArr[i]
		stage.add(new Curve(option))
	}
	
}
addCurve(text.bu)
addCurve(text.zheng,{color: '#b78eea',x: 120,data: {angle: 60, r: 4, step: Math.PI / 40}})
addCurve(text.jing,{color: '#c3c84a',x: 200,data: {angle: 180, r: 4, step: Math.PI / 100}})

function tick() {
	stage.update()
	requestAnimationFrame(tick)
}

tick()