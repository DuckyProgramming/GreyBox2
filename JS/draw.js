function draw(){
	clear()
	background(125)
	graphics.main.clear()
	switch(stage.scene){
		case 'level':
			graphics.main.push()
			graphics.main.background(240)
			for(let a=0,la=run.back.length;a<la;a++){
				for(let b=0,lb=run.back[a].length;b<lb;b++){
					run.back[a][b].display()
					run.back[a][b].update()
				}
			}
			graphics.main.translate(round(-stage.focus.x),round(-stage.focus.y))
			graphics.main.scale(stage.focus.size*stage.quality)
			graphics.main.translate(graphics.main.width/2,graphics.main.height/2)
			for(let a=0,la=run.fore.length;a<la;a++){
				for(let b=0,lb=run.fore[a].length;b<lb;b++){
					run.fore[a][b].update()
					run.fore[a][b].display()
					if(run.fore[a][b].remove){
						run.fore[a].splice(b,1)
						b--
						lb--
					}
				}
			}
			displayBorder(graphics.main,game.edge)
			graphics.main.pop()
			if(game.zone==levels.length-1){
				graphics.main.stroke(0,(entities.players[0].position.y-3000)/300)
				graphics.main.strokeWeight(3)
				for(let a=0,la=40;a<la;a++){
					graphics.main.line(graphics.main.width/la/2+a*graphics.main.width/la,((a+3)*(a+2)*10+game.time*25)%1000-200,graphics.main.width/la/2+a*graphics.main.width/la,((a+3)*(a+2)*10+game.time*25)%1000-150)
				}
				graphics.main.stroke(0,(2400-entities.players[0].position.y)/300)
				graphics.main.strokeWeight(3)
				for(let a=0,la=40;a<la;a++){
					graphics.main.line(graphics.main.width/la/2+a*graphics.main.width/la,((a+3)*(a+2)*-10-game.time*25)%1000+800,graphics.main.width/la/2+a*graphics.main.width/la,((a+3)*(a+2)*-10-game.time*25)%1000+850)
				}
			}
			game.time++
		break
		case 'menu':
		break
		case 'end':
			graphics.main.background(0,0,255)
		break
	}
	stage.scale=min(width/graphics.main.width,height/graphics.main.height)
	displayTransition(graphics.main,transition)
	image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
	updateMouse(graphics.main)
}