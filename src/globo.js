ejecta.require("easeljs/utils/UID.js");
ejecta.require("easeljs/utils/Ticker.js");
ejecta.require("easeljs/geom/Matrix2D.js");
ejecta.require("easeljs/geom/Rectangle.js");
ejecta.require("easeljs/display/DisplayObject.js");
ejecta.require("easeljs/display/Container.js");
ejecta.require("easeljs/display/Stage.js");
ejecta.require("easeljs/display/Bitmap.js");
ejecta.require("easeljs/display/BitmapAnimation.js");
ejecta.require("easeljs/display/SpriteSheet.js");
ejecta.require("easeljs/geom/Point.js");
ejecta.require("easeljs/events/MouseEvent.js");
ejecta.require("easeljs/ui/Touch.js");
ejecta.require("easeljs/display/Shape.js");
ejecta.require("easeljs/display/Graphics.js");


var c = createjs,
    p; // shortcut for prototypes

var canvas = document.getElementById("canvas");
canvas.width = 640;
canvas.height = 960;
var ctx = canvas.getContext('2d');

ejecta.require("Globo/src/spritesheet.js");

init();
function init() {


    var stage = new c.Stage(canvas),
		globo = new pitarupaterson.Globo();

    imgPath = "Globo/img/";
    
	c.Ticker.setFPS(30);
	c.Ticker.addListener(stage);

	globo.x = 320;
	globo.y = 350;
    globo.scaleX = globo.scaleY = 2;
	stage.addChild(globo);
    
    // enable touch interactions if supported on the current device:
    createjs.Touch.enable(stage);
    
    // enabled mouse over / out events
    //stage.enableMouseOver(10);
    stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
    
	//console.log(globo);

}



