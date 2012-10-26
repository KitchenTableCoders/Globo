


var pitarupaterson = {};

var c = createjs,
	pp = pitarupaterson,
	p; // shortcut for prototypes


function init() {

	var canvas = document.getElementById("canvas"),
		stage = new c.Stage(canvas);

	c.Ticker.setFPS(30);
	c.Ticker.addListener(stage);

	_.times(20, function() {
		var globo = new pp.Globo();
		globo.x = Math.random()*600;
		globo.y = Math.random()*900;
		globo.rotation = Math.random()*360;
		stage.addChild(globo);
	});

}


pp.Globo = function() { this.initialize(); };
p = pp.Globo.prototype = new c.Container();
p.Container_initialize = p.initialize;
pp.Globo.sectionSpriteSheets = [
	new c.SpriteSheet({"images": ["img/globo-1.png"], "frames": {"regY": 152, "height": 156, "regX": 57, "width": 106, "count": 8}, "animations": {"all": [0, 7]}}),
	new c.SpriteSheet({"images": ["img/globo-2.png"], "frames": {"regY": 103, "height": 184, "regX": 136, "width": 271, "count": 16}, "animations": {"all": [0, 15]}}),
	new c.SpriteSheet({"images": ["img/globo-3.png"], "frames": {"regY": 95, "height": 117, "regX": 90, "width": 177, "count": 32}, "animations": {"all": [0, 31]}}),
	new c.SpriteSheet({"animations": {"all": [0, 16]}, "images": ["img/globo-4.png"], "frames": {"regY": 112, "height": 215, "regX": 106, "width": 210, "count": 17}})
];
pp.Globo.sectionYPositions = [0, 50, 116, 186];

p.initialize = function() {

	this.Container_initialize();

	var globo = this,
		sections = [];

	_.each(pp.Globo.sectionSpriteSheets, function(sectionSpriteSheets, index){
		var bitmapAnimation = new c.BitmapAnimation(sectionSpriteSheets);
		bitmapAnimation.y = pp.Globo.sectionYPositions[index];
		bitmapAnimation.play();
		bitmapAnimation.onPress = function () {
			if (bitmapAnimation.paused) {
				bitmapAnimation.play();
			} else {
				bitmapAnimation.stop();
			}
		};
		sections.push(bitmapAnimation);
		globo.addChildAt(bitmapAnimation, 0);
	});

};

