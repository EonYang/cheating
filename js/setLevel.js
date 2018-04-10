var levelManager = {
  currentLevel: 1,
  score: 0,
  corrects: 0,
  _goToNextLevel: () => {
    switch (true) {
      case(levelManager.corrects >= 3):
        levelManager.currentLevel = 2 + Math.floor(levelManager.corrects / 3);
        start();
        break;
      case(levelManager.corrects >= 1):
        levelManager.currentLevel = 2;
        start();
        break;
      case(levelManager.corrects == 0):
        levelManager.currentLevel = 1;
        start();
        break;
    }
  },
  getScore: () => {
    levelManager.score += levelManager.currentLevel * 5;
    levelManager.corrects += 1;
    levelManager._goToNextLevel();
  },
  skipCharacter: () => {
    start();
  },
  setLevel: (num) => {
    levelManager.currentLevellevel = num;
    start();
  }
};
