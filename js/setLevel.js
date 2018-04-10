var setLevel = (num) => {
  level = num;
  start();
}
var levelMan = {
  level : 1,
  score : 0,
  corrects : 0,
  getScore : ()=>{
    this.score += level*5;
  },
  goToNextLevel : (corrects)=>{
    switch(corrects){
      case (corrects >= 3):
        this.level = 3 + Math.floor(this.corrects/3);
        break;
      case (corrects >= 1):
        this.level = 2;
        break;
      case (corrects == 0):
        this.level = 1;
        break;
                   }
  },
  setLevel : (num) => {
  this.level = num;
  start();
}
};
