var level = 3;

var setLevel = (num) => {
  level = num;
  start();
}

var levelMan = {
  score : 0,
  ScoreGetsInLevel : {
    1 : 5,
    2 : 10,
    3 : 15,
    4 : 15,
    5 : 15,
    6 : 15,

  },
  scoreToLevel : {
    0 : 1,
    5 : 2,
    25 : 3,
    70 : 4,
    100 : 5,
    120 : 6,
  },
  addScore : (level)=>{},
  nextLevel: (score)=>{
    switch(score){
                
      case 0:
        level = 1;
        break;
        
        case 30:
        level = 1;
        break;
        
                }
}
  



};