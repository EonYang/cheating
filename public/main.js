var questionChar;
var answer;
var input = document.getElementById("input");
var submitBtn = document.getElementById("submitBtn");

var newQuestion = (ques) => {
    document.getElementById('showLevel').innerHTML = `LEVEL : ${levelManager.currentLevel}`;
    document.getElementById('showScore').innerHTML = `SCORE : ${levelManager.score}`;
    document.getElementById('question').innerHTML = ques;
    let answerTemp = cjst.chineseToPinyin(ques).toString();
    answer = removeTone(answerTemp);
};

var showResult = () => {
    let isCorrect = input.value == answer ? true : false;
    let text = isCorrect ? 'Correct!' : 'Wrong';
    document.getElementById('result').innerHTML = text;
    if (isCorrect) {
        getTranslation(questionChar);
        setTimeout(() => {
            document.getElementById('result').innerHTML = ' ';
            input.value = '';
            levelManager.getScore();
        }, 1000);
    } else {
        setTimeout(() => {
            document.getElementById('result').innerHTML = ' ';
            input.value = '';
        }, 1000);
    }
};

var start = () => {
    switch (levelManager.currentLevel) {
        case 1:
            questionChar = getHanzi(questionRepo.level1);
            break;
        case 2:
            questionChar = getHanzi(questionRepo.level2);
            break;
        case 3:
            questionChar = getHanzi(questionRepo.level3);
            break;
        case 4:
            questionChar = getHanzi(questionRepo.level4);
            break;
        case 5:
            questionChar = getHanzi(questionRepo.level5);
            break;
        case 6:
            questionChar = getHanzi(questionRepo.level6);
            break;
    }
    newQuestion(questionChar);
};

// press enter to submit
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submitBtn.click();
    }
});

// listen to dropdown event.
var dropD = document.getElementById("dropDownSetLevel");
dropD.onchange = () => {
    levelManager.currentLevel = +dropD.value;
    start();
};

dropD.value = levelManager.currentLevel;

window.onload = start;
