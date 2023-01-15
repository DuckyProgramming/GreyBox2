function setupGraphics(){
	angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	graphics.main=createGraphics(900,600)
	setupLayer(graphics.main)
	graphics.backgrounds=[]
	for(let a=0;a<10;a++){
		graphics.backgrounds.push(createGraphics(900,600))
		setupLayer(graphics.backgrounds[a])
	}
	graphics.minor=[160]
	for(let a=0,la=graphics.minor.length;a<la;a++){
		graphics.minor[a]=createGraphics(graphics.minor[a],graphics.minor[a])
		setupLayer(graphics.minor[a])
	}
    graphics.minor[0].translate(80,80)
    graphics.minor[0].strokeWeight(0.6)
    graphics.minor[0].strokeJoin(ROUND)
    for(let a=0,la=100;a<la;a++){
        for(let b=0;b<5;b++){
            graphics.minor[0].fill(241+9*a/la,170+52*a/la,189+37*a/la)
            graphics.minor[0].stroke(241+9*a/la,170+52*a/la,189+37*a/la)
            if(a<la/2){
                graphics.minor[0].beginShape()
                graphics.minor[0].vertex(0,0)
                graphics.minor[0].bezierVertex(-30*(1-a/la*2),-20,-40*(1-a/la*2),-50,-4,-70)
                graphics.minor[0].vertex(-10*(1-(a+1)/la*2),-64)
                graphics.minor[0].endShape()
            }
            graphics.minor[0].rotate(-72)
            graphics.minor[0].beginShape()
            graphics.minor[0].vertex(0,0)
            graphics.minor[0].bezierVertex(30,-20,40,-50,4,-70)
            if(a>=la/2){
                graphics.minor[0].vertex(10*(-1+a/la*2),-64)
                graphics.minor[0].bezierVertex(40*(-1+a/la*2),-50,30*(-1+a/la*2),-20,0,0)
            }else{
                graphics.minor[0].vertex(0,-64)
            }
            graphics.minor[0].endShape(CLOSE)
        }
    }
    for(let a=0;a<5;a++){
        graphics.minor[0].rotate(72)
        graphics.minor[0].rotate(-12)
        graphics.minor[0].noStroke()
        graphics.minor[0].fill(240,207,211)
        graphics.minor[0].quad(0,-4,4,-16,0,-24,-4,-16)
        graphics.minor[0].rotate(12)
    }
    graphics.minor[0].fill(254,228,232)
    graphics.minor[0].ellipse(0,0,12,12)
}