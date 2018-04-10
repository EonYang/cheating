var quesion, answer;
var newQuestion = (ques) => {
  // let i = Math.floor(Math.random()*qa.length);
  document.getElementById('showLevel').innerHTML = `LEVEL : ${level}`;
  document.getElementById('question').innerHTML = ques;
  let answerTemp = cjst.chineseToPinyin(ques).toString();
  answer = removeTone(answerTemp);
}
var showResult = () => {
  let input = document.getElementById('input'); 
  let text = input.value == answer ? 'Correct!':'Wrong';
  let result = document.getElementById('result').innerHTML = text;
  setTimeout(()=>{
    document.getElementById('result').innerHTML = ' ';
    input.value = '';
  },3000);
  // console.log(text);
};

var start = () => {
  switch(level){
    case 1:
      newQuestion(getHanzi(level1));
      break;
    case 2:
      newQuestion(getHanzi(level2));
      break;
    case 3:
      newQuestion(getHanzi(level3));
      break;
    case 4:
      newQuestion(getHanzi(level4));
      break;
    case 5:
      newQuestion(getHanzi(level5));
      break;
               }
}

start();
