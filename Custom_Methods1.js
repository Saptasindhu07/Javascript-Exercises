let Object_1={
    score1:1,
    score2:2,
    score3:3,
    total_method: function(initial_score){
        console.log(initial_score+Object_1.score1+Object_1.score2+Object_1.score3)
    }
}
Object_1.total_method(4)