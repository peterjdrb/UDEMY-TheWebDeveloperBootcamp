function average (scoreArr) {
    var averageScore = 0;
    var totalScore = 0;
    
    scoreArr.forEach( function(score){
        totalScore+= score;
    })
    
    averageScore = totalScore / scoreArr.length;
    
    return Math.round(averageScore);
}

var scores = [90,98,89,100,100,86,94];
console.log(average(scores));

var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));