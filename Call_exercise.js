let game1_score=prompt("Enter game 1 score: ")
let game_scores={
    game1:{
    game_name:"game1",
    game_score_:+game1_score,
    result:function(){
        if(this.game_score_>20){
            console.log(this.game_name," WIN")
        }
        else{
            console.log(this.game_name," LOSE")
        }
    }
}}
let count=1
while(true){
    count=count+1
    let new_game_score=prompt("Enter Game Score:")
    game_scores["game"+count]={
        game_score_:+new_game_score,
        game_name:"Game"+count
    }
    let decision_=prompt("More?")
    if(decision_=="No"|| decision_=="no"){
        break
    }
}
console.log(game_scores)
game_scores.game1.result.call(game_scores.game3)