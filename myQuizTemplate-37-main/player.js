class Player{
    construtor(){
        this.playerNumber=0;
        this.playerName=null;
        this.playerScore=0;
        }

updateCount(c){
    db.ref("/").update({"playerCount":c})
}
updateName(c){
    db.ref("players/player"+this.playerNumber).update({"name":c})
}
updateScore(c){
    db.ref("players/player"+this.playerNumber).update({"score":c})
}

static getPlayerInfo(){
    db.ref("players").on("value",function(data){playerInfo=data.val()})
}







}
