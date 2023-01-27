class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.players]
        switch(this.type){
            case 3: case 4: case 14:
                this.timers=[0]
            break
        }
	}
	display(){
		this.layer.translate(this.position.x,this.position.y)
		this.layer.noStroke()
		switch(this.type){
            case 1:
				this.layer.fill(100,this.fade)
				this.layer.rect(0,0,this.width,this.height)
			break
            case 2:
			    this.layer.fill(100,150,150,this.fade)
				this.layer.rect(0,0,this.width,this.height)
			break
            case 3:
                this.layer.noFill()
                this.layer.stroke(50,this.fade*min(1,max(1-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.strokeWeight(4)
                regTriangle(this.layer,0,0,this.width/2,60)
            break
            case 4:
                this.layer.noFill()
                this.layer.stroke(50,this.fade*min(1,max(1-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.strokeWeight(4)
                regTriangle(this.layer,0,-6,this.width/2,60)
                regTriangle(this.layer,0,6,this.width/2,60)
            break
            case 5:
                this.layer.fill(150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                for(let a=0,la=this.width/10;a<la;a++){
                    this.layer.triangle(-this.width/2+a*10,-this.height/2,-this.width/2+10+a*10,-this.height/2,-this.width/2+5+a*10,-this.height/2-15)
                    this.layer.triangle(-this.width/2+a*10,this.height/2,-this.width/2+10+a*10,this.height/2,-this.width/2+5+a*10,this.height/2+15)
                }
                for(let a=0,la=this.height/10;a<la;a++){
                    this.layer.triangle(-this.width/2,-this.height/2+a*10,-this.width/2,-this.height/2+10+a*10,-this.width/2-15,-this.height/2+5+a*10)
                    this.layer.triangle(this.width/2,-this.height/2+a*10,this.width/2,-this.height/2+10+a*10,this.width/2+15,-this.height/2+5+a*10)
                }
            break
            case 6: case 8:
                this.layer.fill(100,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(50,this.fade)
                this.layer.beginShape()
                this.layer.vertex(-this.width/2,-this.height/2)
                this.layer.vertex(-this.width/4,-this.height/2)
                this.layer.vertex(this.width/2,this.height/4)
                this.layer.vertex(this.width/2,this.height/2)
                this.layer.vertex(this.width/4,this.height/2)
                this.layer.vertex(-this.width/2,-this.height/4)
                this.layer.endShape()
                this.layer.stroke(40,this.fade)
                this.layer.strokeWeight(3)
                if(this.type==6){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x,this.base.position.y-this.position.y-240)
                }else if(this.type==8){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x,this.base.position.y-this.position.y+240)
                }
            break
            case 7: case 9:
                this.layer.fill(100,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                this.layer.fill(50,this.fade)
                this.layer.beginShape()
                this.layer.vertex(this.width/2,-this.height/2)
                this.layer.vertex(this.width/4,-this.height/2)
                this.layer.vertex(-this.width/2,this.height/4)
                this.layer.vertex(-this.width/2,this.height/2)
                this.layer.vertex(-this.width/4,this.height/2)
                this.layer.vertex(this.width/2,-this.height/4)
                this.layer.endShape()
                this.layer.stroke(40,this.fade)
                this.layer.strokeWeight(3)
                if(this.type==7){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x-240,this.base.position.y-this.position.y)
                }else if(this.type==9){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x+240,this.base.position.y-this.position.y)
                }
            break
            case 10: case 11: case 12: case 13:
                this.layer.fill(150,this.fade)
                this.layer.rect(0,0,this.width,this.height)
                for(let a=0,la=this.width/10;a<la;a++){
                    this.layer.triangle(-this.width/2+a*10,-this.height/2,-this.width/2+10+a*10,-this.height/2,-this.width/2+5+a*10,-this.height/2-15)
                    this.layer.triangle(-this.width/2+a*10,this.height/2,-this.width/2+10+a*10,this.height/2,-this.width/2+5+a*10,this.height/2+15)
                }
                for(let a=0,la=this.height/10;a<la;a++){
                    this.layer.triangle(-this.width/2,-this.height/2+a*10,-this.width/2,-this.height/2+10+a*10,-this.width/2-15,-this.height/2+5+a*10)
                    this.layer.triangle(this.width/2,-this.height/2+a*10,this.width/2,-this.height/2+10+a*10,this.width/2+15,-this.height/2+5+a*10)
                }
                this.layer.stroke(40,this.fade)
                this.layer.strokeWeight(3)
                if(this.type==10){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x,this.base.position.y-this.position.y-240)
                }else if(this.type==12){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x,this.base.position.y-this.position.y+240)
                }else if(this.type==11){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x-240,this.base.position.y-this.position.y)
                }else if(this.type==13){
                    this.layer.line(this.base.position.x-this.position.x,this.base.position.y-this.position.y,this.base.position.x-this.position.x+240,this.base.position.y-this.position.y)
                }
            break
            case 14:
                this.layer.noFill()
                this.layer.stroke(150,this.fade*min(1,max(2-this.timers[0]/15,-15+this.timers[0]/15)))
                this.layer.strokeWeight(6)
                this.layer.rect(0,0,this.width-6,this.height-6)
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
        switch(this.type){
            case 3: case 4:
                if(this.timers[0]>0){
                    this.timers[0]++
                    if(this.timers[0]>=240){
                        this.timers[0]=0
                    }
                }
            break
            case 6:
                if(this.time%240<60){
                    this.position.y-=4
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.y+=4
                }
            break
            case 7:
                if(this.time%240<60){
                    this.position.x-=4
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.x+=4
                }
            break
            case 8:
                if(this.time%240<60){
                    this.position.y+=4
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.y-=4
                }
            break
            case 9:
                if(this.time%240<60){
                    this.position.x+=4
                }else if(this.time%240>=120&&this.time%240<180){
                    this.position.x-=4
                }
            break
            case 10:
                if(this.time%120<60){
                    this.position.y-=4
                }else{
                    this.position.y+=4
                }
            break
            case 11:
                if(this.time%120<60){
                    this.position.x-=4
                }else{
                    this.position.x+=4
                }
            break
            case 12:
                if(this.time%120<60){
                    this.position.y+=4
                }else{
                    this.position.y-=4
                }
            break
            case 13:
                if(this.time%120<60){
                    this.position.x+=4
                }else{
                    this.position.x-=4
                }
            break
            case 14:
                if(this.timers[0]>0){
                    this.timers[0]++
                    if(this.timers[0]>=240){
                        this.timers[0]=0
                    }
                }
            break
        }
		for(let a=0,la=this.collide.length;a<la;a++){
            for(let b=0,lb=this.collide[a].length;b<lb;b++){
                if(boxInsideBox(this,this.collide[a][b])&&this.collide[a][b].timers[1]<=0&&!this.collide[a][b].dead&&
                !((this.type==3||this.type==4)&&this.timers[0]>0)&&!(this.type==14&&this.timers[0]>30)){
                    switch(this.type){
                        case 5: case 10: case 11: case 12: case 13:
                            this.collide[a][b].dead=true
                        break
                        case 14:
                            if(this.timers[0]==0){
                                this.timers[0]++
                            }
                        break
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==3||this.type==4){
                            this.collide[a][b].jumps+=this.type-2
                            if(this.timers[0]==0){
                                this.timers[0]++
                            }
                        }else{
                            this.collide[a][b].squish[boxCollideBox(this,this.collide[a][b])]=true
                            if(boxCollideBox(this,this.collide[a][b])==0&&this.collide[a][b].velocity.y<0){
                                this.collide[a][b].position.y=this.position.y+this.height/2+this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==1&&this.collide[a][b].velocity.y>0){
                                this.collide[a][b].position.y=this.position.y-this.height/2-this.collide[a][b].height/2
                                this.collide[a][b].velocity.y=0
                                this.collide[a][b].velocity.x*=(1-physics.friction)
                                if(this.type!=2){
                                    this.collide[a][b].timers[0]=5
                                    this.collide[a][b].jumps=max(1,this.collide[a][b].jumps)
                                }
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==2&&this.collide[a][b].velocity.x<0){
                                this.collide[a][b].position.x=this.position.x+this.width/2+this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                            }
                            else if(boxCollideBox(this,this.collide[a][b])==3&&this.collide[a][b].velocity.x>0){
                                this.collide[a][b].position.x=this.position.x-this.width/2-this.collide[a][b].width/2
                                this.collide[a][b].velocity.x=0
                            }
                        }
                    }
                }
            }
        }
        super.update()
	}
}