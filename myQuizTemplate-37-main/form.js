class Form{
    constructor(){
       this.input=createInput("ENTER NAME")
        this.button=createButton("play")
        this.msg=createElement("h2")
    }
    display(){
        var title=createElement("h1")
        title.html("QUIZEEEEE APP")
        title.position(200,30)
    
       
        this.input.position(200,100)
    
       
        this.button.position(200,130)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
    
            var name=this.input.value()
            playerCount++
          
            player.updateCount(playerCount)
            player.playerNumber=playerCount
            player.updateName(name)
          
            player.playerName=name
            
            this.msg.html("WELCOME "+name)
            this.msg.position(200,200);
        })
    
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.msg.hide()
    
    }
    }
       
    