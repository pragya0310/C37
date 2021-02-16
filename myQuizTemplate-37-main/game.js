class Game{
    construtor(){}
getstate(){
    db.ref("gamestate").on(
        "value",
        function(data){
            gameState=data.val()
        },
        function(){}
    );
}
updateState(s){
    db.ref("/").update(
        {
            "gamestate":s
        }
    )
}
async start(){if(gameState==0){
    player=new Player()
//player.getCount()
playerCount=await db.ref("playerCount").once("value")

if(playerCount.exists())

{playerCount=playerCount.val()}

   form=new Form();
    form.display();
//console.log(playerCount)

}}
play(){
    form.hide()
    Player.getPlayerInfo()
    if(playerInfo!=undefined){var x=100;
     for(var i in playerInfo){if(i=="player"+player.playerNumber)
     
     {fill('red');}
     else{fill('black')};

    textSize(20);
    text(playerInfo[i].name.slice(0,7),x,100);
    text(playerInfo[i].score,x,150);
  
    x+=100

}}

}
}
