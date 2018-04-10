var levelManager = {
  currentLevel : 1,
  score : 0,
  corrects : 0,
  _goToNextLevel : () => {
    switch(true){
      case (this.corrects >= 3):
        this.currentLevel = 3 + Math.floor(this.corrects/3);
        break;
      case (this.corrects >= 1):
        this.currentLevel = 2;
        break;
      case (this.corrects == 0):
        this.currentLevel = 1;
        break;
                   }
  },
  getScore : ()=>{
    this.score += this.currentLevel * 5;
    this.corrects += 1;
    this._goToNextLevel();
  },
  setLevel : (num) => {
  this.currentLevellevel = num;
  start();
}
};
