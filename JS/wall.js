class wall extends physical{
	constructor(layer,x,y,type,width,height){
		super(layer,x,y,type,width,height)
		this.collide=[entities.players]
        switch(this.type){
            case 3: case 4:
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
                regTriangle(this.layer,0,-10,this.width/2,60)
                regTriangle(this.layer,0,10,this.width/2,60)
            break
		}
		this.layer.translate(-this.position.x,-this.position.y)
	}
	update(){
        switch(this.type){
            case 3:
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
                !((this.type==3||this.type==4)&&this.timers[0]>0)){
                    switch(this.type){
                    }
                    if(!this.collide[a][b].dead){
                        if(this.type==3||this.type==4){
                            this.collide[a][b].jumps++
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
                                    this.collide[a][b].jumps=1
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